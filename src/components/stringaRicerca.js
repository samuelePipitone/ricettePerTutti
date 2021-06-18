import React from 'react'

//istazio una serie di stringhe che conterranno una ricerca per home screen, che ogni volta cambierà
const stringaRandomFit = [
    "https://api.edamam.com/search?q=chicken&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=meat&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=fish&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=protein&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=legumes&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
]
const stringaRandomTradizionale = [
    "https://api.edamam.com/search?q=lasagna&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=pizza&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=pasta+al+sugo&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=goulash&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
]

const stringaRandomVeloce = [
    "https://api.edamam.com/search?q=fast&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=shake&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=fruit&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=drink&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=macedonia&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
]

 const stringaRandomPersonalizzata = [
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
    "https://api.edamam.com/search?q=popular&app_id=3dca0b91&app_key=72b2bc992bdbafabe3b61df5dcbdc464",
 ]

 //scelgo la stringa in modo random assegnandole un numero
 const randomFit = stringaRandomFit[Math.floor(Math.random()*stringaRandomFit.length)]
 const randomTradizionale = stringaRandomTradizionale[Math.floor(Math.random()*stringaRandomTradizionale.length)]
 const randomVeloce = stringaRandomVeloce[Math.floor(Math.random()*stringaRandomVeloce.length)]
 const randomPersonalizzata = stringaRandomPersonalizzata[Math.floor(Math.random()*stringaRandomPersonalizzata.length)]

 //tramite l'assegnazione di numeri capisco da dove viene la richiesta
export default function stringaRicerca(numero){

if(numero == 1){
    return randomFit;
}
if(numero == 2){
    return randomTradizionale;
}
if(numero == 3){
    return randomVeloce;
}
if(numero == 4){
    return randomPersonalizzata;
}

}