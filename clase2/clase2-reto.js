// Manera 1
function Increment1(i, callback) {
    const result = i + 1
    setTimeout(() => {
        callback(result)
    }, 1000)
}


/*
Increment1(0, function (resultado) {
    console.log(resultado)
    Increment1(resultado, function (result) {
        console.log(result)
        Increment1(result, function (resultado) {
            console.log(resultado)
            Increment1(resultado, function (result) {
                console.log(result)
                Increment1(result, function (resultado) {
                    console.log(resultado)
                    Increment1(resultado, function (result) {
                        console.log(result)
                        Increment1(result, function (resultado) {
                            console.log(resultado)
                            Increment1(resultado, function (result) {
                                console.log(result)
                                Increment1(result, function(resultado){
                                    console.log(resultado)
                                    Increment1(resultado, console.log)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
*/

//Manera 2 
function Increment2 (i){
    return new Promise(function(resolve){
        const result = i + 1
        setTimeout(function(){
            resolve(result)
        console.log(result)
        }, 1000)
        
    })
}

/*
Increment2(0).then(Increment2).then(Increment2)
.then(Increment2).then(Increment2).then(Increment2)
.then(Increment2).then(Increment2).then(Increment2).then(Increment2)
*/


//Manera 3 
function Increment3 (i){
    return new Promise(function(resolve){
        const result = i + 1
        setTimeout(function(){
            resolve(result)
        console.log(result)
        }, 1000)
        
    })
}
async function main(){
    let rst1 = await Increment3(0)
    let rst2 = await Increment3(rst1)
    let rst3 = await Increment3(rst2)
    let rst4 = await Increment3(rst3)
    let rst5 = await Increment3(rst4)
    let rst6 = await Increment3(rst5)
    let rst7 = await Increment3(rst6)
    let rst8 = await Increment3(rst7)
    let rst9 = await Increment3(rst8)
    let rst10 = await Increment3(rst9)
    
}
main()