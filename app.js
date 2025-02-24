//SECTION - 
let snakes = 0
let snakeLevel = 1
let autoTimer = 0
const clickUpgrades = [
  {
    name: "Mice",
    price: 100,
    level: 0,
    amount: 1,
    bonus: 0
  },
  {
    name: "Rabbits",
    price: 500,
    level: 0,
    amount: 5,
    bonus: 0
  },
];

const autoUpgrades = [
  {
    name: "Raccoons",
    price: 1000,
    level: 0,
    amount: 10,
    bonus: 0
  },
  {
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
  snakes += findTotalClick()
  drawEverything()
}
function timerEggs() {
  snakes += findAutoClick()
  drawEverything()

}

function addClickUpgrade(indexNumber) {
  const upgradeLevel = clickUpgrades[indexNumber]
  upgradeLevel.level++
  drawEverything()
}
function addAutoUpgrade(indexNumber) {
  const upgradeLevel = autoUpgrades[indexNumber]
  upgradeLevel.level++
  drawEverything()
}


function findBonus(indexNumber) {
  const sum = clickUpgrades[indexNumber].level * clickUpgrades[indexNumber].amount;
  return sum;
}
function findBonus2(indexNumber) {
  const sum = autoUpgrades[indexNumber].level * autoUpgrades[indexNumber].amount;
  return sum;
}

function findTotalClick() {
  const clickPower = findBonus(0) + findBonus(1) + 1
  return clickPower
}
function findAutoClick() {
  const autoPower = findBonus2(0) + findBonus2(1)
  return autoPower

}

function upgradesCost(indexNumber) {
  const upgradeBuy = clickUpgrades[indexNumber].price
  if (snakes < upgradeBuy) {
    return 'lol'
  } snakes -= clickUpgrades[indexNumber].price
  snakeLevel += clickUpgrades[indexNumber].amount
  clickUpgrades[indexNumber].level++ 
  
  drawEverything()
}
function upgradesCost2(indexNumber) {
  const upgradeBuy = autoUpgrades[indexNumber].price
  if (snakes < upgradeBuy) {
    return 'lol'
  } snakes -= autoUpgrades[indexNumber].price
  autoTimer += autoUpgrades[indexNumber].amount
  autoUpgrades[indexNumber].level++
  drawEverything()
}
function increasePrice(indexNumber) {
let upgradeBuy = (clickUpgrades[indexNumber].level + 1) * clickUpgrades[indexNumber].price
  const percent = upgradeBuy * 0.05
return percent
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
  const sum = findBonus(0);
  mouseBonusElem.innerText = `${sum}`

}
function drawRabbitBonus() {
  const rabbitBonusElem = document.getElementById('rabbitBonus')
  const sum = findBonus(1);
  rabbitBonusElem.innerText = `${sum}`

}
function drawRaccoonBonus() {
  const raccoonBonusElem = document.getElementById('raccoonBonus')
  const sum = findBonus2(0)
  raccoonBonusElem.innerText = `${sum}`

}
function drawFoxBonus() {
  const foxBonusElem = document.getElementById('foxBonus')
  const sum = findBonus2(1)
  foxBonusElem.innerText = `${sum}`

}
function buttonMore()
const priceElem = document.getElementById('buttonChange')
const percent = increasePrice(0)
priceElem.innerText = `${percent}`

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

setInterval(timerEggs, 3000);
//!SECTION