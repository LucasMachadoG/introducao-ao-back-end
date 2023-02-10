//Quando nos for usar o enum para representar numeros, nos podemos apenas colocar o nome que ele segue a ordem comecando pelo 0
//e assim por diante 
export enum Etapa {
    Infantil, 
    Fundamental,
    Medio
}

export class Aluno {
    nome: string
    etapa: Etapa
    //Aqui nos vamos estar falando que um aluno contem uma avaliacao
    avaliacao?: Avaliacao

    constructor (nome: string, etapa: Etapa) {
        this.nome = nome
        this.etapa = etapa
    }
}

//Nesse caso aqui n faz sentido eu colocar um extends na avaliacao, porque uma avaliacao nao eh um aluno, o aluno pode ter uma avaliacao, por isso que 
//nesse caso nao faz sentido nos usar a heranca, ai para isso nos vamos ter que usar a composicao, que eh uma forma de relacionar duas classes 
//sem a heranca

//Por padrao a visibilidade das classes vai ser public

export class Avaliacao {
    private nota: number
    public materia: string 

    constructor (nota: number, materia: string) {
        this.nota = nota
        this.materia = materia
    }

    //Caso eu queira modificar a nota...
    //Para isso nos teriamos que criar metodos

    public alterarNota (novaNota: number) {
        //Isso nos garante uma seguranca

        if (this.validaProfessor()) {
            this.nota = novaNota
        }
    }

    //Metodos tambem podem ser privados 

    validaProfessor() {
        
        return true
    }
 }

