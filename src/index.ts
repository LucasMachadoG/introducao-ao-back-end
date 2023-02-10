import { User } from './user/user'
import { Arroz, Bebida, Produto, TipoArroz } from './produto/produto'
import { TipoProduto } from "./produto/produto";
import { Aluno, Avaliacao, Etapa } from './aluno/aluno';

// //Paradigma imperativo

// let valor1: number = 10;
// let valor2: number = 8;

// let media: number = (valor1 + valor2) / 2

// //Paradigma procedural -> A partir de agora nos vamos ter pequenos processos dentro do nosso codigo, criando varias funcoes para nao ter que reescrever
// //todo processo

// function calcMedia (x: number, y: number) {
//     return (x + y) / 2
// }

// media = calcMedia (valor1, valor2)

// console.log (media)


// let user1 = new User ("Lucas", "Mateus", 20)
// let user2 = new User ("Bruna", "Carol", 24)

// // user1.name = "Lucas"
// // user2.name = "Mateus"


// //Se nos der um console.log no objeto ele vai nos retornar o nome da classe e os valores que tem dentro
// // console.log (user1)
// // console.log (user2)

// user1.mostrarNome()


// user1.ativarUser()
// user1.mostrarNome()


//Agora que nos fizemos um construtor na classe arroz, nos temos que chamar esse construtor
// let arroz = new Arroz (7, TipoArroz.parbolizado)
// let coca = new Bebida ("Coca", 5, 2)
// let copo = new Produto ("Copo", 15, TipoProduto.bazar)


// arroz.tipoArroz = TipoArroz.parbolizado


// console.log (arroz)
// console.log (coca)
// console.log (copo)

// //Sempre que eu exigir um tipo produto, que eh a classe mae eu posso passar como parametro uma classe filha tbm 

// function mostraTipoArroz (arroz: Arroz) {
//     console.log (`O tipo do arroz eh ${arroz.tipoArroz}`)
// }

// function mostraTipoProduto (produto: Produto) {
//     console.log (`O tipo do produto eh ${produto.tipo}`)
// }

// mostraTipoArroz (arroz)
// mostraTipoProduto (copo)

const lucas = new Aluno ("Lucas", Etapa.Medio)
const avaliacao1 =  new Avaliacao (10, "Matematica")

//associando os dois objetos

//Agora que definimos a propriedade nota como private, nos nao podemos mais modificar ela, apenas dentro da classe
//Nao pode nem ler e nem atribuir valor pra nota
// avaliacao1.nota = 5
// console.log (avaliacao1.nota)
//Alterando a nota
avaliacao1.alterarNota (10)

lucas.avaliacao = avaliacao1

console.log (lucas)