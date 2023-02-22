import express from 'express'

//Aqui nos estamos configurando de forma bem simples o express para rodar uma API
const app = express ()

//O req vai ser um objeto que vai ter todas as informacoes das requisicoes que foram feitas
//O res serve para responder uma API 

//A requisicao ela eh assincrona, ou seja, eu posso colocar um settimeout pra fazer ela rodar depois de um determinado tempo
app.get("/test", (req, res) => {
    res.send ({
        "nome": "Lucas",
        "idade": 20
    })
})

//As APIs sao baseadas em rotas

//Enquanto a API estiver rodando eu consigo receber requisicoes
//Se ela estiver parada eu n consigo chamar essa API

//Colocando API para rodar
//Vamos ter que passar 2 parametros para o listen, o primeiro sendo a porta que ele vai rodar e o segundo vai ser uma callback
//Essa callback eh executada quando o listen finalizar
app.listen (3333, () => {
    console.log ("API esta rodando...")
})

