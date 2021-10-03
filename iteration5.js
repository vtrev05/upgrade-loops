'use strict';

//ITERATION 5

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const favouritePlacesToTravel = []

function favouritePlaces() {
    for (let i = 0; i < placesToTravel.length; i++) {
        if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
            console.log(`Lo siento, la ciudad de ${placesToTravel[i].name} no me gusta`)
        } else {
        favouritePlacesToTravel.push(placesToTravel[i].name)
        } 
    }
    console.log(favouritePlacesToTravel)
}
favouritePlaces()