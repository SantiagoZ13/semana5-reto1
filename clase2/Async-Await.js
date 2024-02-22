function slowSquare(number){
    return new Promise(function(resolve){
        const result = number**2
        setTimeout(function(){
            resolve(result)      
        }, 2000)
    })
}

async function main(){
    const resultado = await slowSquare(2)
    const resultado2 = await slowSquare(resultado)
    const resultado3 = await slowSquare(resultado2)
    console.log(resultado3)
}

main()