let ONE_SEC_IN_MS = 1000

function cook(ingredient, callback, time){
    /* Esta funcion se ejecuta en el tiempo que se establezca
       Eso es conocido como un callback */
    setTimeout(function (){
        callback(ingredient)
    }, time * ONE_SEC_IN_MS)
}

let make = cook

cook("Arroz", console.log, 10)
cook("Huevo", console.log, 2)
make("Mesa", console.log, 1)
