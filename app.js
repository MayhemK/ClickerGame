//SECTION - 
let snakes = 0
let snakeLevel = 1
let autoTimer = 0
const clickUpgrades = [
  {
    // @ts-ignore
    name: "Mice",
    price: 100,
    level: 0,
    amount: 1,
    bonus: 0
  },
  {
    // @ts-ignore
    name: "Rabbits",
    price: 500,
    level: 0,
    amount: 5,
    bonus: 0
  },
];

const autoUpgrades = [
  {
    // @ts-ignore
    name: "Raccoons",
    price: 1000,
    level: 0,
    amount: 10,
    bonus: 0
  },
  {
    // @ts-ignore
    name: "Foxes",
    price: 6000,
    level: 0,
    amount: 60,
    bonus: 0
  },
];

//!SECTION


//SECTION - 

function hatchEggs() {
  snakes++
  drawEverything()
}
function checkLevel() {
  console.log(clickUpgrades, autoUpgrades)
}
function addClickUpgrade(indexNumber) {
  const upgradeLevel = clickUpgrades[indexNumber]
  upgradeLevel.level++
}
function addAutoUpgrade(indexNumber) {
  const upgradeLevel = autoUpgrades[indexNumber]
  upgradeLevel.level++
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
  autoTimer += 10
  drawTimerLevel()
}
function eatFox() {
  autoTimer += 60
  drawTimerLevel()
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
  mouseLevelElem.innerText = `${clickUpgrades[0].level}`
}
function drawRabbitLevel() {
  const rabbitLevelElem = document.getElementById('rabbitLevel')
  rabbitLevelElem.innerText = `${clickUpgrades[1].level}`
}
function drawRaccoonLevel() {
  const raccoonLevelElem = document.getElementById('raccoonLevel')
  raccoonLevelElem.innerText = `${autoUpgrades[0].level}`
}
function drawFoxLevel() {
  const foxLevelElem = document.getElementById('foxLevel')
  foxLevelElem.innerText = `${autoUpgrades[1].level}`
}
function drawMouseBonus() {
  const mouseBonusElem = document.getElementById('mouseBonus')
  mouseBonusElem.innerText = `${clickUpgrades[0].bonus}`

}
function drawRabbitBonus() {
  const rabbitBonusElem = document.getElementById('rabbitBonus')
  rabbitBonusElem.innerText = `${clickUpgrades[1].bonus}`

}
function drawRaccoonBonus() {
  const raccoonBonusElem = document.getElementById('raccoonBonus')
  raccoonBonusElem.innerText = `${autoUpgrades[0].bonus}`

}
function drawFoxBonus() {
  const foxBonusElem = document.getElementById('foxBonus')
  foxBonusElem.innerText = `${autoUpgrades[1].bonus}`

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