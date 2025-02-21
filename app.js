//SECTION - 
let snakes = 0

//!SECTION


//SECTION - 
function hatchEggs() {
  snakes++
  console.log
  drawSnakes()

}


function eatBirds(params) {

}

//!SECTION


//SECTION -

function drawSnakes() {
  const eggCountElem = document.getElementById('snakeCount')
  eggCountElem.innerText = `Snakes: ${snakes}`
}

//!SECTION