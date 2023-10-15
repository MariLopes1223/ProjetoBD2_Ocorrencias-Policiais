# Projeto de Aplicação web para registro e consulta de ocorrências policiais  

A aplicação permite que o usuário crie registros de uma ocorrência policial e os visualize no mapa. Os dados persistem no banco de dados. As informações sobre as ocorrências são:

- Título
- Tipo (assalto, furto, dentre outros)
- Data
- Hora
- Localização geográfica

## Inicialização  

É preciso criar um arquivo .env na pasta raiz com as variáveis de ambiente como no exemplo seguinte:  

```js
API_PORT = 3000
PG_USER = postgres
PG_PASSWORD = postgres
PG_DATABASE = geo
PG_HOST = localhost
```

1. ```npm i```
2. ```npm run pack```
3. ```npm start```

## Tecnologias utilizadas

Sequelize, typescript, expressjs, leafletjs, cors, postgresql, postgis.
