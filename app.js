//SECTION - 
let snakes = 0
let snakeLevel = 1
let autoTimer = 0
let bonus = 0

let clickUpgrades = [
  {
    // @ts-ignore
    name: Mice,
    price: 100,
    quantity: 0,
    bonus: 1
  },
  {
    // @ts-ignore
    name: Rabbits,
    price: 500,
    quantity: 0,
    bonus: 5,
  }
];

let autoUpgrades = [
  {
    // @ts-ignore
    name: Raccoons,
    price: 1000,
    quantity: 0,
    bonus: 10
  },
  {
    // @ts-ignore
    name: foxes,
    price: 6000,
    quantity: 0,
    bonus: 60,
  }
]
//!SECTION


//SECTION - 
function hatchEggs() {
  snakes++

  drawSnakes()
  drawSnakesLevel()
  drawTimerLevel()
}



function eatMouse() {
  snakeLevel++
  drawSnakesLevel()
}
function eatRabbit() {
  snakeLevel += 5
  drawSnakesLevel()
}
function eatRaccoon() {
  snakeLevel += 10
  drawSnakesLevel()
}
function eatFox() {
  snakeLevel += 60
  drawSnakesLevel()
}


//!SECTION


//SECTION -

function drawSnakes() {
  const eggCountElem = document.getElementById('snakeCount')
  eggCountElem.innerText = `Snakes: ${snakes}`
}
function drawSnakesLevel() {
  const clickPowerElem = document.getElementById('snakeLevel')
  clickPowerElem.innerHTML = `${snakeLevel} <span class="mdi mdi-cursor-default-click text-"></span>`
}
function drawTimerLevel() {
  const timerPowerElem = document.getElementById('timerLevel')
  timerPowerElem.innerHTML = `<span class="mdi mdi-timer-sand"></span> ${autoTimer}`
}


//!SECTION