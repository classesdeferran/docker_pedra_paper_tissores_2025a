# Indicar la imagen a utilizar
FROM node:24-alpine3.22

# Indicar la ruta de trabajo en la imagen
WORKDIR /app

# Copiar los ficheros a la carpeta /app
COPY . .

# Cargar las dependencias (módulos de Node) y limpiar el caché
RUN npm install && npm cache clean --force && rm -rf /tmp/ /root/.npm/_cacache

ENV PORT=5000

EXPOSE $PORT

CMD ["npm", "start"]