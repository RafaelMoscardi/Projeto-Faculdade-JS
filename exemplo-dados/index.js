// PARTE DE CONFIGURAÇÃO
const conn = require("./db/conexao")

const exphbs = require("express-handlebars")

const express = require('express')

const bodyparser = require('body-parser')

const rotas = require("./routes/rotas")

app.use("/". rotas)

// PARTE DE REQUISIÇÃO
const app = express()
const port = 3000
app.use('/public', express.static(__dirname + '/public'))

// CONFIGURAR O TEMPLATE ENGINE
app.engine('hbs', exphbs.engine({extname : '.hbs'}))
app.set('view engine', 'hbs')



app.listen(port, () => console.log(`Exemplo de app escutando na porta ${port}!`))