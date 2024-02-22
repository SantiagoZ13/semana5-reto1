// Promise nos ayuda a tratar mejor con los callbackhell
function slowSquare(number){
    return new Promise(function(resolve){
        const result = number**2
        setTimeout(function(){
            resolve(result)      
        }, 2000)
    })
}

function calculate(result){
    return slowSquare(result)
}
slowSquare(2).then(calculate).then(calculate).then(console.log)
