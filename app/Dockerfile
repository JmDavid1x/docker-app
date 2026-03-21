# Imagen base oficial de Node 18
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar dependencias primero (mejor uso de caché)
COPY package*.json ./
RUN npm install --only=production

# Copiar el resto del código
COPY . .

# Puerto que expone la app
EXPOSE 3000

# Comando de inicio
CMD ["node", "src/index.js"]