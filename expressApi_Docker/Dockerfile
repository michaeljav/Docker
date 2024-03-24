#LA IMAGEN NODE POR LA CUAL SE HARA EL CONTENEDOR
FROM node:20

RUN apt-get update && apt-get install -y imagemagick


#este commando corre antes de crear el contenedor.
RUN npm install -g pnpm

#EL DIRECTORIO DENTRO DE MI CONTENEDOR SE LLAMARA /APP
WORKDIR /app

#copiar todo mi projecto que tengo en mi raiz, por eso uso el .  hacia el directorio app en mi  contenedor
COPY . /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Expose the port the app runs on
EXPOSE 3001

# Define the startup command
#CMD ["pnpm", "start","--reload","--host", "0.0.0.0"]
CMD ["pnpm", "start"]
