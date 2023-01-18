import { User } from './user'

//Paradigma imperativo

let valor1: number = 10;
let valor2: number = 8;

let media: number = (valor1 + valor2) / 2

//Paradigma procedural -> A partir de agora nos vamos ter pequenos processos dentro do nosso codigo, criando varias funcoes para nao ter que reescrever
//todo processo

function calcMedia (x: number, y: number) {
    return (x + y) / 2
}

media = calcMedia (valor1, valor2)

console.log (media)


let user1 = new User ("Lucas", "Mateus", 20)
let user2 = new User ("Bruna", "Carol", 24)

// user1.name = "Lucas"
// user2.name = "Mateus"


//Se nos der um console.log no objeto ele vai nos retornar o nome da classe e os valores que tem dentro
// console.log (user1)
// console.log (user2)

user1.mostrarNome()


user1.ativarUser()
user1.mostrarNome()
