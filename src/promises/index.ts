//Uma forma de usar uma funcao assincrona eh usando a funcao setTimeout, recendo dois parametros, sendo o primeiro uma funcao e o segundo um 
//numero

import { rejects } from "assert"
import { resolve } from "path"


function obterUsuarioSincrono () {
    return {
        nome: "Lucas", 
        idade: 20
    }
}

let condicao = true

//Aqui nos estariamos chamando o nosso banco de dados de forma assincrona 
//Esse 3000 vai fazer com que nossa funcao execute certa acao depois de 3s
function obterUsuario () {
    return new Promise<any> ((resolve, rejects) => {
        console.log ("Inciou")


        //Caso agente queira que retorne um erro
        if (!condicao) {
            rejects (" A condicao esta errada")
        }

        setTimeout (() => {
            resolve ({
                nome: "Lucas",
                idade: 20,
                assincrono: true
            })
        }, 3000)

        console.log ("Finalizou")
    })
}


function salvarUsuario (usuario: any) {

    usuario.idade = usuario.idade + 1

    return new Promise<any> ((resolve, rejects) => {
        setTimeout (() => {
            resolve (usuario)
        }, 2000)
    })
}

//Uma promise so resolve coisas da tipagem dela 
//Nos podemos colocar promises dentro de funcoes que ja existem

//Quando a promise rejeitar (falha) nos conseguimos capturar essa falha com o catch
//Sempre quando nos fizer um .then nos temos que ter um .catch tambem

//O finally vai ser executado tanto no resolve quando no rejects

//Nao eh uma boa pratica colocar um then dentro de outro then
//Para melhorar isso nos podemos retornar o salvarUsuario

function execturObterThenCatch () {
    obterUsuario()
        //Aqui nos estamos dizendo para ele retornar o usuario e retornar a promise
        .then((resultado) => {
            return salvarUsuario(resultado)
        })
        .then ((resultado) => {
            console.log (resultado)
            console.log ("Usuario salvo com sucesso")
        })
        .catch ((error: any) => {
            console.log ("Deu ruim" + error)
        })
        .finally (() => {
            console.log ("Finally executou")
        })
}

//Nos podemos colocar o async antes do nome da funcao
//Isso vai dizer que nossa funcao eh assincrona, vai executar coisas assincronas


async function executarObterAsync () {
//Aqui nos estamos trabalhando de forma sincrona
    try {
        let user = await obterUsuario()
        console.log (user)
    } catch (error: any) {
        console.log ("Erro" + error)
    }

}

executarObterAsync ()

// const usuario = obterUsuario()
// console.log (usuario)


//Uma promisse eh uma classe, que vai receber um parametro no seu construtor e esse parametro eh uma funcao e essa funcao vai receber dois parametros
//sendo eles o resolve e o reject
//Dentro dessa promisse nos podemos fazer o processamento que nos quiser
// const p1 = new Promise<any> ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ({
//             nome: "Lucas", 
//             idade: 20, 
//             assincrono: true
//         })
//     }, 3000)
// })  

//Se nos quiser pegar o valor resolvido por essa promise nos devemos usar o then e esse then nos vamos passar uma arrow function e como parametro
//vai ser o valor resolvido
// p1.then ((resultado: any) => {
//     console.log (resultado)
// })
//Agora nos conseguimos retornar coisas de procedimentos assincronos, a promise nos permite fazer isso, para fazer isso nos devemos colocar o 
//processamento assincrono dentro da promise 