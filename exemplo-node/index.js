import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __dirlname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.get("/", (req,res )=>{
    res.sendFile("public/index.html", {root : __dirlname})
})

// app.get("/", (raq,res)=>{
//     res.send("<p>Servidor Criado!</p>")
// })

app.get("/NovaRota", (req,res)=>{
    res.send("<p style='color:#0000ff'>Nova Rota criada com Sucesso!</p>")
})

app.get("/usuario/:nome", (req,resp)=>{
    resp.send("<h1>Exemplo de Rotas</h1><p style='color:#00ff00':>Valor do parâmetro passado: "+ req.params.nome +"</p>")
})

app.get("/user2", (req,resp)=>{
    resp.send("<h1>Envio de Usuário por GET</h1> <a href='/view-usuario?nomeUsuario=Mauro'>VIEW</a>")
})

app.get("/view-usuario", (req,resp)=>{

    let nmUser= req.query.nomeUsuario

    resp.send(`<h1>Parametro recebido através de envio por GET</h1><p>Usuário : ${nmUser}</p>`)
})

app.listen(3000,()=>{
    console.log("Servidor iniciado na porta 3000")
})