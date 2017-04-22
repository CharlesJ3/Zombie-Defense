function zombie(name, health, damageReduction, expDropped, moneyDropped, level, alignment) {
    this.name = name;
    this.health = health;
    this.damageReduction = damageReduction;
    this.expDropped = expDropped;
    this.moneyDropped = moneyDropped;
    this.level = level;
    this.alignment = alignment;
}

let ratZombie = new zombie('Rat Zombie', 25, 1, 1, 1, 1, 'bad');
let smallDogZombie = zombie('Rat Dog Zombie', 50, 2, 2, 2, 2, 'bad');
let superSlowZombie = new zombie('Crawling Zombie', 100, 5, 1, 3, 3, 'bad');
let oneLegZombie = new zombie('One-legged Zombie', 350, 15, 15, 5, 4, 'bad');


function hunter(name, health, damage, attackSpeed, critChance, exp, maxExp, level, maxLevel, alignment) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.attackSpeed = attackSpeed;
    this.critChance = critChance;
    this.exp = exp;
    this.maxExp = maxExp;
    this.level = level;
    this.maxLevel = maxLevel;
    this.alignment = alignment;
}

let DirtThrower = new hunter('Dirt Thrower', 5, 1, 1, 5, 0, 10, 1, 10, 'good');
let SmallRockSlinger = new hunter('Small Rock Slinger', 5, 1, 1, 5, 0, 10, 1, 25, 'good');
let Stoneslinger = new hunter('Stoneslinger', 5, 1, 1, 5 ,0, 10, 1, 50, 'good');
let Dartthrower = new hunter('Dart Thrower', 5, 1, 1, 5 ,0, 10, 1, 50, 'good');


function levelUp(){

}

function allStats(){
  console.log("Name: " + DirtThrower.name);
  console.log("Health: " + DirtThrower.health);
  console.log("Damage: " + DirtThrower.damage);
  console.log("Attack Speed: " + DirtThrower.attackSpeed);
  console.log("Crit Chance: " + DirtThrower.critChance);
  console.log("Exp: " + DirtThrower.exp);
  console.log("Next Level: " + DirtThrower.maxExp);
  console.log("Level: " + DirtThrower.level);
}

const statsButton = document.createElement("button");
statsButton.innerHTML = "View Stats for Dirt Thrower";


const body = document.getElementById("characterStats");
body.appendChild(statsButton);

statsButton.addEventListener("click", allStats());