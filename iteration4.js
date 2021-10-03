'use strict';

//ITERATION 4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

function alienProperties() {
    for (const alienProperty in alien) {
        console.log(`Nuestro alien tiene la propiedad ${alienProperty} con valor: ${alien[alienProperty]}`)
    }
}
alienProperties()