/*
    Ejemplo mas real de las promesas y el js asincrono
    fech es una promesa
*/

fetch("https://dog.ceo/api/breeds/list/all")
.then(function (data){
    return data.json()
})
.then(function (jsonData){
    const { message } = jsonData
    const dogBreeds = Object.keys(message)
    console.log(dogBreeds.sort().reverse())
    
})