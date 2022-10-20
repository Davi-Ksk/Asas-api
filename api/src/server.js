//const { response } = require('express');
const express = require('express'); //importa o Express

const routes = require("./routes");

const app = express(); //executa o express
app.use(express.json());

app.use(routes);

const PORT = 3333; //Define qual vai ser a porta do Servidor
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
//^^^^ informa que o express deve observar essa porta e imprime qual é a porta no log

