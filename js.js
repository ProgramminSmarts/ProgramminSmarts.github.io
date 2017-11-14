var chest = document.getElementById("chest").innerHTML;

var score = 0;
var cpc = 1;
var cps = 0;

var factoryCPS = 1;
var factoryCost = 60;

var workerCPS = 4;
var workerCost= 225;

var numbFactories = 0;
var numbWorkers = 0;

var addCPCCost = 650;

var treasureCost = 500;
var doubleChance = 99;
var chancePercentage = 1;

var chestChance = 0;

function warning() {
  alert("By clicking 'Ok' or choosing to exit this message, you agree to the following terms:\nI am not responsible for this game impeding in your work or learning, and the intent of this game was not to distract you either. Please play on your discretion!\n-Harshul ");
}

function spacebar(e) {
  if(e.keyCode == 32) {
    clicked();
  }
}
function clicked () {
  var randNumb = Math.random()*100+1;
  if (randNumb>doubleChance) {
    score = score+(cpc*2);
  }
  else {
    score+=cpc;
  }

  update();

}
onkeyup = spacebar;

function chest() {
  document.createElement("div");
  div.style.width = "100px";
  div.style.height = "150px";
  div.style.background = "blue";
  div.style.left = "300px";
  div.style.top = "400px";
}

function buyTreasure () {
  
  if (score>=treasureCost) {
    
    if(doubleChance>65) {
      score -= treasureCost;
      doubleChance -= 1;
      chancePercentage += 1;
      treasureCost += Math.floor(0.055*treasureCost);
      document.getElementById("chanceCost").innerHTML = "Cost: " + treasureCost + "  Chocolate Chips";
      document.getElementById("currentChance").innerHTML = "Current Chance: " + chancePercentage +"%";
    }
    else {
      alert("You have the reached the max percentage, you can no longer buy any more of this treasure.");
      document.getElementById("currentChance").innerHTML = "Current Chance: 35% (Max)";
      document.getElementById("chanceCost").innerHTML = " ";
    }
    
  }
}
function buyFactory () {
  if (score>=factoryCost) {
    cps += factoryCPS;
    score -= factoryCost;
    numbFactories += 1;
    factoryCost += Math.floor(0.065*factoryCost);
    document.getElementById("factoryCost").innerHTML = "Cost: " + factoryCost + "  Chocolate Chips";
    document.getElementById("numbFactories").innerHTML = numbFactories;
    update();
  }
}
function buyWorker () {
  if (score>=workerCost) {
    cps += workerCPS;
    score -= workerCost;
    numbWorkers += 1;
    workerCost += Math.floor(0.12*workerCost);
    document.getElementById("workerCost").innerHTML = "Cost: " + workerCost + "  Chocolate Chips";
    document.getElementById("numbWorkers").innerHTML = numbWorkers;
    update();
  }
}

function update () {
  document.getElementById('chipsDisp').innerHTML = score + " Chocolate Chips";
  document.getElementById('cpsDisp').innerHTML = "CPS: " + cps;
  document.getElementById('cpcDisp').innerHTML = "CPC: " + cpc;
}



function addingCPS () {
  score += cps;
  update();
}

function addingCPC() {
  if (score>=addCPCCost) {
    cpc+=1;
    score -= addCPCCost;
    addCPCCost += Math.floor(0.065*addCPCCost);
    document.getElementById("upgradeCost").innerHTML = "Cost: " + addCPCCost + "  Chocolate Chips";
    clicked();
  }
  
}
function openTab (tabName) {
  var x = document.getElementsByClassName("tab");
  for (i = 0; i<x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
function info() {
  var q1 = prompt("What do you need help with? \n    Manual\n    Shop  \n   Upgrades\n   Treasures");
  if (q1 == "treasures" || q1 == "Treasures") {
    alert("Treasures are special abilities that may cost a lot, but are worth. These are more long-term upgrades.\n  The first treasure increases the chance you get double the amount of chocolate chips you would normally get in a click. The max percentage you can have is 35%.");
  }
  else if (q1 == "Manual" || q1 == "manual") {
    alert("How to play:\n   To get points, or chocolate chips, you have to click the Hershey Bar. It displays your score with 'Score: Chocolate Chips'. Underneath that, it says CPS and CPC. They stand for Chips Per Second and Chips Per Click. The CPS means that you get a certain amount of chips every second. The CPC means the amounts of chips you get everytime you click. You can upgrade both of these with the shop.");
  }
  else if (q1 === null) {
    return;
  }
  else {
    alert("Please enter one of the options given for more information about the topic.");
    info();
  }
}