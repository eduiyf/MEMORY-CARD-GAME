const cardArray = [
{
    name: "ardilla",
    img: 'Imagenes/ardilla.jpg',
},

{
    name: "cerdo",
    img: 'Imagenes/cerdo.jpg',
},

{
    name: "gato",
    img: 'Imagenes/gato.jpg',
},

{
    name: "oveja",
    img: 'Imagenes/oveja.jpg',
},

{
    name: "panda",
    img: 'Imagenes/panda.jpg',
},

{
    name: "tigre",
    img: 'Imagenes/tigre.jpg',
},

{
    name: "ardilla",
    img: 'Imagenes/ardilla.jpg',
},

{
    name: "cerdo",
    img: 'Imagenes/cerdo.jpg',
},

{
    name: "gato",
    img: 'Imagenes/gato.jpg',
},

{
    name: "oveja",
    img: 'Imagenes/oveja.jpg',
},

{
    name: "panda",
    img: 'Imagenes/panda.jpg',
},

{
    name: "tigre",
    img: 'Imagenes/tigre.jpg',
},

];

cardArray.sort(() => 0.5 - Math.random()); //un hack para clasificar en forma aleatoria la lista de objetos dentro del Array.

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const resultDisplay = document.querySelector("#result")

function createBoard(){
    for (let i = 0; i < cardArray.length ; i++){ //solo significa que vas a hacer 10 veces una cosa, nada mas.
        const card = document.createElement('img');
        card.setAttribute('src', 'Imagenes/pregunta.png');
        card.setAttribute('data-id', i);
       card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
       

    }
}

createBoard();

function flipCard(){
    const idCard = this.getAttribute("data-id");
    const cardName = cardArray[idCard].name;
    const cardImg = cardArray[idCard].img;
    cardsChosen.push(cardName);
    cardsChosenIds.push(idCard);
    console.log(cardsChosen,cardsChosenIds);
    this.setAttribute("src", cardImg);
    if (cardsChosen.length === 2){
    setTimeout(checkMatch, 500)};
    
    
}

function checkMatch(){
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log("Check a Match");
    
    if (cardsChosen[0] == cardsChosen[1]){
        alert("You found a match");
        cards[optionOneId].setAttribute("src", "Imagenes/imagen blanca.avif");
        cards[optionTwoId].setAttribute("src", "Imagenes/imagen blanca.avif");
        cards[optionTwoId].removeEventListener("src", flipCard);
        cards[optionTwoId].removeEventListener("src", flipCard);
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute("src", 'Imagenes/pregunta.png');
        cards[optionTwoId].setAttribute("src", 'Imagenes/pregunta.png');
        alert("sorry, try again!")
    }
    cardsChosen = [];
    cardsChosenIds = [];

    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulation you found them all!!!";
    }
}
