# Etapa 1: Construção da imagem (build)
FROM node:18 AS builder

# Diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código do projeto para o contêiner
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Etapa 2: Produção
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários da etapa anterior (diretório dist, node_modules)
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY package*.json ./

# Expor a porta que o NestJS vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]