const bodyParser = require('body-parser');
const express = require('express');
const app = express();                      //instanciou o express

app.use(express.static('.'))                // middleware sirva todos os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true})); //submit de formulário, converte
app.use(bodyParser.json())                    // se vier em formato json é convertido

app.listen(8080, () => console.log('Executando...'))