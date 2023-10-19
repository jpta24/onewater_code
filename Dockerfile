# Utiliza una imagen de Node
FROM node:20.8.1-alpine3.18

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto 8080
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "run", "serve"]
