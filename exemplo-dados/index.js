// PARTE DE CONFIGURAÇÃO
const express = require("express")

const conn = require("./db/conexao")

const exphbs = require("express-handlebars")

const bodyparser = require("body-parser")

// PARTE DE REQUISIÇÃO
const app = express()
const port = 3000
app.use("/public", express.static(__dirname + "/public"))

// CONFIGURAR O TEMPLATE ENGINE
app.engine('hbs', exphbs.engine({extname : ".hbs"}))
app.set('view engine', "hbs")

// ROTA 1
app.get("/hi", (req,res)=>{
    res.render("hi")
})

// ROTA 2
app.get("/", (req,res)=>{
    res.render("home")
})

app.listen(port, ()=> console.log(`Exemplo de conexão com MongoDB na porta ${port}.`))