export function obterUsuario (callback: any) {
        console.log ("Inciou")

        setTimeout (() => {
            callback.call (null, {
                nome: "Lucas",
                idade: 20,
                assincrono: true
            })
        }, 2000)

        console.log ("Finalizou")
}


function salvarUsuario (usuario: any, callback: any) {
    usuario.idade = usuario.idade + 1

    setTimeout (() => {
        callback.call (null, usuario)
    }, 2000)
}

//Quando o settimeoutr for executado, eu estou passando uma funcao para ele e essa funcao vai ser invocada no settimeout como se fosse o resolve
//da nossa promise so que utilizando o callback


//Callback hell
obterUsuario ((result: any) => {
    console.log (result)

    salvarUsuario (result, (result: any) => {
        console.log (result)
        salvarUsuario (result, (result: any) => {
            console.log (result)
            salvarUsuario (result, (result: any) => {
                console.log (result)
                salvarUsuario (result, (result: any) => {
                    console.log (result)
                    salvarUsuario (result, (result: any) => {
                        console.log (result)
                        salvarUsuario (result, (result: any) => {
                            console.log (result)
                            salvarUsuario (result, (result: any) => {
                                console.log (result)
                                salvarUsuario (result, (result: any) => {
                                    console.log (result)
                                    salvarUsuario (result, (result: any) => {
                                        console.log (result)
                                        salvarUsuario (result, (result: any) => {
                                            console.log (result)
                                            salvarUsuario (result, (result: any) => {
                                                console.log (result)
                                                salvarUsuario (result, (result: any) => {
                                                    console.log (result)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})