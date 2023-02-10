//Para criar uma classe nos devemos colocar class e o nome da nossa classe e depois abrir as chaves

//Na nossa classe User ele esta reclamando porque nos nao estamos setando nenhum valor para o username, name e age

export class User {
    username: string;
    name: string;
    age: number
    ativo: boolean

    constructor (username:string, name: string, age: number) {
        this.username = username
        this.name = name
        this.age = age
        this.ativo = false
    }

    mostrarNome () {
        if (this.ativo === false) {
            console.log ("O user nao esta ativo, ative ele antes");
            return 
        }

        console.log (``)
    }

    ativarUser () {
        this.ativo = true
    }
}

//Quando nos colocamos esse new, nos estamos criando uma instancia um novo usuario que vai seguir o padrao da classe User
//A classe sempre vai gerar objetos, o user1 e user2 sao objetos da classe User

//Nos podemos colocar uma funcao dentro da nossa classe, que eh a funcao construtora
//A funcao construtora vai receber alguns parametros e sempre que nos fizer um new user essa funcao vai ser chamada
//Para se criar basta digitar constructor () e depois digitar os paramatros
//Apos isso, no index.ts nos vamos ver que o new user estao com erro, isso se da porque agora nos temos que passar os 3 parametros que nos passamos 
//no construtor, entao basicamente quando eu chamar o new user, eu vou estar chamando o construtor 


//Convensao -> Nome da classe segue padrao sempre com a primeira letra maiuscula
