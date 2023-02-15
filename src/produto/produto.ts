export enum TipoProduto {
    alimento = "A",
    bebida = "B",
    bazar = "Z"
}

export enum TipoArroz {
    integral = "I",
    parbolizado = "P",
    branco = "B"
}

//Nesse caso aqui, se nos colocasse o valor como privado e usassemos aquele metodo que criamos de mostrar valor, poderiamos usar sem problema 
//nenhum dentro da classe produto, mas se tentassemos usar na classe arroz, mesmo o arroz sendo uma sub-classe de produto, ele nao deixaria
//para resolver isso existe o protected, que n vai deixar mudar os valores no index, mas vai permitir que acessamos em classes filhas

export class Produto {
    public nome: string;
    public valor: number;
    public tipo: TipoProduto  //Alimento, bebida, bazar 
    
    constructor (nome: string, valor: number, tipo: TipoProduto) {
        this.nome = nome
        this.valor = valor
        this.tipo = tipo
    }

    public mostrarValor () {
        console.log (this.valor)
    }
}

//Esse extends vai dizer que a classe Arroz eh uma extensao de produto, ou seja, vai puxar todos os valores de protudo para arroz
//Ele vai herdar tudo que o produto tem 

//Arroz eh uma sub-classe - classe filha 
//Produto eh uma super-classe - classe mae
export class Arroz extends Produto{
    tipoArroz!: TipoArroz

//Agora nos vamos criar um construtor para a sub-classe, a primeira regra quando se faz isso eh chamar o construtor da super-classe (mae)

    constructor (valor: number, tipoArroz: TipoArroz) {
        super("Arroz", valor, TipoProduto.alimento);

        this.tipoArroz = tipoArroz
    }


    //Aqui nos estamos usando o polimorfismo
    //As vezes quando nos queremos fazer o polimorfismo, nos queremos fazer exatamente a mesma coisa que a classe mae faz, mas adicionar mais coisas
    //entao para nao replicar tudo que a classe mae faz, nos podemos fazer algo parecido como no construtor
    public mostrarValor () {
        console.log (`O valor eh ${this.valor}`)
    }
}

export class Bebida extends Produto{
    litros!: number;

    constructor (nome: string, valor: number, litros: number) {
        super (nome, valor, TipoProduto.bebida)

        this.litros = litros
    }


    public mostrarValor () {
        super.mostrarValor ()

        console.log (`Essa bebida custa ${this.valor}`)
    }
} 




