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
PG_DATABASE = (nome do seu banco de dados)
PG_HOST = localhost
```
Após isso, executar no terminal os seguintes comandos:

1. ```npm i```
2. ```npm run pack```
3. ```npm start```

Ao final, a aplicação estará pronta para uso.

## Tecnologias utilizadas

Sequelize, typescript, expressjs, leafletjs, cors, postgresql, postgis.
