//SECTION - 
let snakes = 0
let snakeLevel = 1
let autoTimer = 0
const clickUpgrades = [
  {
    // @ts-ignore
    name: Mice,
    price: 100,
    level: 69,
    bonus: 1
  },
  {
    // @ts-ignore
    name: Rabbits,
    price: 500,
    level: 74,
    bonus: 5,
  }
]

let autoUpgrades = [
  {
    // @ts-ignore
    name: Raccoons,
    price: 1000,
    level: 126,
    bonus: 10
  },
  {
    // @ts-ignore
    name: Foxes,
    price: 6000,
    level: 48092,
    bonus: 60,
  }
]

//!SECTION


//SECTION - 
function hatchEggs() {
  snakes++
  drawEverything()
}

function increaseClick() {

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

function findBonus() {
  const bonusAmount = clickUpgrades.findIndex((upgrade) => upgrade.level)
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
function drawMouseLevel() {
  const mouseLevelElem = document.getElementById('mouseLevel')
  mouseLevelElem.innerText = `0`
}
function drawRabbitLevel() {
  const rabbitLevelElem = document.getElementById('rabbitLevel')
  rabbitLevelElem.innerText = `0`
}
function drawRaccoonLevel() {
  const raccoonLevelElem = document.getElementById('raccoonLevel')
  raccoonLevelElem.innerText = `0`
}
function drawFoxLevel() {
  const foxLevelElem = document.getElementById('foxLevel')
  foxLevelElem.innerText = `0`
}
function drawMouseBonus() {
  const mouseBonusElem = document.getElementById('mouseBonus')
  mouseBonusElem.innerText = `0`

}
function drawRabbitBonus() {
  const rabbitBonusElem = document.getElementById('rabbitBonus')
  rabbitBonusElem.innerText = `0`

}
function drawRaccoonBonus() {
  const raccoonBonusElem = document.getElementById('raccoonBonus')
  raccoonBonusElem.innerText = `0`

}
function drawFoxBonus() {
  const foxBonusElem = document.getElementById('foxBonus')
  foxBonusElem.innerText = `0`

}

function drawEverything() {
  drawSnakes()
  drawSnakesLevel()
  drawTimerLevel()
  drawMouseBonus()
  drawRabbitBonus()
  drawRaccoonBonus()
  drawFoxBonus()
  drawMouseLevel()
  drawRabbitLevel()
  drawRaccoonLevel()
  drawFoxLevel()
}
//!SECTION