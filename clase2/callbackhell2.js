// Otro ejemplo de callback hell
function slowSquare(number, callback){
    const result = number**2
    setTimeout(function(){
        if(callback == console.log){
            console.log("Calculando Cuadrado...")
            setTimeout(function(){
                callback(result)
            }, 2000)
        }else{
            callback(result)
        }
    }, 2000)
}


slowSquare(3, function(result){
    slowSquare(result, function(result){
        slowSquare(result, console.log)
    })
})