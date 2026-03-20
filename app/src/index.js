const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/dockerapp')
    .then(() => console.log('✅ MongoDB conectado'))
    .catch(err => console.error('❌ Error MongoDB:', err));

const Item = mongoose.model('Item', new mongoose.Schema({
    nombre: String,
    creadoEn: { type: Date, default: Date.now }
}));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post('/items', async (req, res) => {
    const item = await Item.create({ nombre: req.body.nombre });
    res.status(201).json(item);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 App corriendo en puerto ${PORT}`));