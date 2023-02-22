import axios from "axios"

// fetch ("https://reqres.in/api/users/2")

//Aqui com o axios.get nos vamos estar fazendo uma requisao pra essa API que nos colocamos
//Quando nos fizemos uma requisicao a uma API, ele vai retornar uma promise operando de forma assincrona
async function obterUsuario () {
    try {
        const result = await axios.get("https://reqres.in/api/users/2")
        console.log (result.data)
    } catch (error: any) {
        console.log ("Erro: " + error)
    }

    //Podemos utilizar o .then tambem

    // result.then ((data) => {
    //     console.log (data.data)
    // })
}

obterUsuario ()

