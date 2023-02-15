let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
let listText: string[] = ["Loja", 'Produto']
let tupla: any[] = [1, "teste", {nome: "Lucas"}]

let meuObjeto = {
    nome: "Lucas",
    idade: 20
}


//Se eu quiser fazer uma copia identica do array list nos vamos utilizar os tres pontinhos, entao esse array vai conter todos os valores que list
//possui
//Isso vale tambem para objetos
let copiaLista = [...list]