import { profileEnd } from "console";
import { Produto, Arroz, Bebida, TipoProduto, TipoArroz } from "../produto/produto";


let produtos: Produto[] = [
    new Produto ("Cervaja", 20, TipoProduto.bebida),
    new Arroz (6, TipoArroz.branco),
    new Produto ("Feijao", 5, TipoProduto.alimento),
    new Produto ("Xicara", 15, TipoProduto.bazar),
    new Produto ("Prato", 30, TipoProduto.bazar),
    new Bebida ("Coca", 7, 2)
]

//O map vai mapear cada item desse array e nos geralmente vamos passar uma funcao como parametro (arrow function)
//O parametro item vai fazer com quem a cada item a funcao seja chamada
//O map ele retorna um outro array, sendo o maior objetivo dele pegar um lista e alterar ela, fazendo uma copia alterada dela
//Serve para manipular os valores do array
let novoArray = produtos.map((item) => {
    if (item.tipo === TipoProduto.alimento) {
        item.valor = item.valor + 10
        return item
    }
})

//A operacao foreach eh igual o map, a unica difereca eh que o foreach retorna void, n vai retornar uma copia do array 
produtos.forEach (item => {
    item.valor = item.valor + 10
})


//O filter serve para nos filtrar algo que queremos
let bebidas = produtos.filter (item => {
    if (item.tipo === TipoProduto.bebida) {
        return true
    }

    return false
})

produtos.filter (item => item.tipo === TipoProduto.alimento)

//Quando nos queremos pegar um elemento especifico da lista nos devemos usar o finde, para procurar apenas um elemento
//Caso a gente use o find e haja mais de um elemento igual, ele sempre vai retornar o primeiro elemento que encontrar
let xicara = produtos.find ((item) => {
    if (item.nome === "Xicara"){
        return true
    }

    return false
})

let xicara2 = produtos.filter ((item) => {
    return item.nome.match(/^Xicara$/)
})

console.log (produtos.some ((item) => item.nome === "Xicara"))
console.log (produtos.every ((item) => item.valor < 100))

let xicaraIndex = produtos.findIndex ((item) => item.nome === "Xicara")

//Existem 3 maneiras de adicionar as coisas num array

//O push vai colocar o novo elemento no final da lista
produtos.push(new Produto ("Tomate", 10, TipoProduto.alimento))

//O unshift vai colocar o novo elemento no inicio da lista
produtos.unshift (new Produto ("Cebola", 15, TipoProduto.alimento))

let novoProdutos = [
    new Produto ("Tomate", 7, TipoProduto.alimento),
    new Produto ("Cebola", 9, TipoProduto.alimento)
]

//Concat vai concatenar os arrays

produtos = produtos.concat(produtos, novoProdutos)

//Remove o ultimo
produtos.pop()

//Remove o primeiro
produtos.shift()

//O splice serve para remover mais de um elemento do array, ele possuiu dois argumentos, o primeiro defini em qual posicao vai comecar e o segundo
//quantos ele vai remover
produtos.splice(2, 5)

//O reduce 
// let valor = produtos.reduce ((current, item) => {

// }, 0)

produtos.push()
produtos.unshift (...novoProdutos)

// console.log (novoArray)
// console.log (produtos)

console.log (bebidas)


