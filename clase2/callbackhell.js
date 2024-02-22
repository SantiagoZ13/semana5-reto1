/*Calbackhell. para que se ejecute una detras de otra,
osea una tiene que ejecutarse para seguir con la otra.
*/
let ONE_SEC_IN_MS = 1000

function cook(ingredient, callback, time){
    setTimeout(function (){
        callback(ingredient)
    }, time * ONE_SEC_IN_MS)
}

let make = cook

cook("Arroz", function(ingredient){
    console.log(ingredient)
    cook("Huevo", function(ingredient){
        console.log(ingredient)
        make("Mesa", console.log, 1)
    }, 2)
}, 10)