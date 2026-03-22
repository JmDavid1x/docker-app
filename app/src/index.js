const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/dockerapp';
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

mongoose.connect(MONGO_URI)
    .then(() => console.log(`MongoDB connected in ${NODE_ENV} mode`))
    .catch(err => console.error('MongoDB connection error:', err));

const Item = mongoose.model('Item', new mongoose.Schema({
    nombre: String,
    creadoEn: { type: Date, default: Date.now }
}));

app.get('/health', (req, res) => res.json({
    status: 'ok',
    environment: NODE_ENV
}));

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post('/items', async (req, res) => {
    const item = await Item.create({ nombre: req.body.nombre });
    res.status(201).json(item);
});

app.listen(PORT, () => console.log(`App running on port ${PORT} in ${NODE_ENV} mode`));