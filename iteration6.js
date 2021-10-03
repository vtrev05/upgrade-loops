'use strict';

//ITERATION 6

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let toysWithoutCat = []

function toysLoop() {
    for (const toy of toys) {
        if (toy.name.includes('gato')) {
            console.log('Lo siento, pero este juguete contiene un gato y a mí me dan alergia')
        } else {
            toysWithoutCat.push(toy)
        }
    }
    console.log(toysWithoutCat)
}

toysLoop()