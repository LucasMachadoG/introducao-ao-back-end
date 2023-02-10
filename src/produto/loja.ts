import { Produto } from "./produto";


export interface iEndereco {
    rua:string
    numero: number
}

//A interface so vai nos dizer quel eh a assinatura/regra a ser seguida
export interface iLoja {
    nome: string;
    endereco: iEndereco
    produtos: Produto[]
    mostrarNome(): void
}

//Ja na classe alem das propriedades eu posso fazer a implementacao, ja na interface nao tem implementacao
//Agora nos vamos fazer uma classe seguindo a interface, nos vamos fazer como se fosse uma heranca tbm, so que ao inves de utilizar o extends
//nos vamos usar o implements.
//Agora a classe loja ela implementa a interface iloja, ou seja a classe loja cumpre todos os requisitos impostos por essa interface
export class Loja implements iLoja{
    public nome!: string;
    public endereco!: iEndereco
    public produtos!: Produto[]

    public mostrarNome(): void {
        console.log (this.nome)
    }

    //Sedex, Fedex e TNT 
    public calcularFrete (peso: number, servico: ifreteServico) {
        // let valor = 0

        //Se nos desenvolver o nosso codigo desse jeito, alem de ser um codigo feio, cheio de else if, nos vamos estar sujeito a erros\, podendo 
        //estragar todo nossa logica de negocio, nesses casos, a interface nos ajuda muito
        // if (servico === 'Sedex') {
        //     valor = new Sedex().calcularFrete (peso)
        // } else if (servico === 'Fedex') {
        //     valor = new Fedex().calcularFrete (peso)
        // } else {
        //     valor = new TNT().calcularFrete (peso)
        // }

        return servico.calcularFrete(peso);
    }
}

//Para solucionar esse problema e n ter riscos de erro no codigo, nos podemos criar uma interface 

interface ifreteServico {
    calcularFrete (peso: number): number;
}
 
class Sedex implements ifreteServico {
    calcularFrete (peso: number) {
        return peso * 10 
    }
}

class Fedex implements ifreteServico{
    calcularFrete (peso: number) {
        return (peso * 2) + 15
    }
}

class TNT implements ifreteServico{
    calcularFrete (peso: number) {
        return (peso * peso) / 2
    }
}

let loja = new Loja()

let sedex = new Sedex()
let fedex = new Fedex()
let tnt = new TNT()

loja.calcularFrete(15, sedex)
loja.calcularFrete(21, fedex)
loja.calcularFrete(30, tnt)


export class MagazineLuiza implements iLoja{
    public nome!: string;
    public endereco!: iEndereco
    public produtos!: Produto[]

    public mostrarNome(): void {
        console.log (this.nome)
    }
}




