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

export class Produto {
    public nome: string;
    private valor: number;
    public tipo: TipoProduto  //Alimento, bebida, bazar 
    
    constructor (nome: string, valor: number, tipo: TipoProduto) {
        this.nome = nome
        this.valor = valor
        this.tipo = tipo
    }

    mostrarValor () {
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
}

export class Bebida extends Produto{
    litros!: number;

    constructor (nome: string, valor: number, litros: number) {
        super (nome, valor, TipoProduto.bebida)

        this.litros = litros
    }

}




