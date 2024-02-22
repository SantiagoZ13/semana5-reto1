let ONE_SEC_IN_MS = 1000

function cook(ingredient, callback, time){
    setTimeout(function (){
        callback(ingredient)
    }, time * ONE_SEC_IN_MS)
}

let make = cook

cook("Arroz", console.log, 10)
cook("Huevo", console.log, 2)
make("Mesa", console.log, 1)

//Calbackhell. para que se ejecute una solo cuando se ejecuto otra
cook("Arroz", function(ingredient){
    console.log(ingredient)
    cook("Huevo", function(ingredient){
        console.log(ingredient)
        make("Mesa", console.log, 1)
    }, 2)
}, 10)

