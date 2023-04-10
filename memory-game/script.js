
const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);



// const game= document.querySelector('#game')
// game.addEventListener("click", function(e) {if (e.target.tagName==='DIV') {return console.log(e.target.style.backgroundColor)}
// else if (e.target.className === 'red') {return e.target.style.backgroundColor='red'}})

// game.addEventListener("click", function(event) {if (event.target.tagName === '') {console.log('Thats a MATCH')}})

const game= document.querySelector('#game')
game.addEventListener("click", function(e) {if (e.target.className==='red') {return e.target.style.backgroundColor='red'}
else if (e.target.className==='blue'){return e.target.style.background='blue'}
else if (e.target.className==='green'){return e.target.style.background='green'}
else if (e.target.className==='orange'){return e.target.style.background='orange'}
else if (e.target.className==='purple'){return e.target.style.background='purple'}
})

let element = document.getElementById("game")
game.addEventListener('dblclick', function(f){if (f.target.tagName==='DIV') {f.target.style.backgroundColor='white'}})








// let card1= document.querySelectorAll('.orange')[0]
// card1.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card2= document.querySelectorAll('.orange')[1]
// card2.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card3= document.querySelectorAll('.red')[0]
// card3.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card4= document.querySelectorAll('.red')[1]
// card4.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card5= document.querySelectorAll('.blue')[0]
// card5.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card6= document.querySelectorAll('.blue')[1]
// card6.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card7= document.querySelectorAll('.purple')[0]
// card7.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card8= document.querySelectorAll('.purple')[1]
// card8.addEventListener("click", function(e) {handleCardClick(e); e.preventDefault()})
// let card9= document.querySelectorAll('.green')[0]
// card9.addEventListener("click", function(e) {handleCardClick(e); revealAndMatch9(e)})
// let card10= document.querySelectorAll('.green')[1]
// card10.addEventListener("click", function(e) {handleCardClick(e); revealColor10(e); e.preventDefault()})

// cardDeck =[card1, card2, card3, card4. card5, card6, card7, card8, card9, card10]
// function revealAndMatch9(e) {
// for (let card in cardDeck) {if (card == card9) {  
// return card9.style.backgroundColor='green'}}}






