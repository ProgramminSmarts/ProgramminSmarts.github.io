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

function warning() {
  alert(" By clicking 'Ok' or choosing to exit this message, you agree to the following terms:\nI am not responsible for this game impeding in your work or learning, and the intent of this game was not to distract you either. Please play on your discretion!\n              -Harshul ");
}

function spacebar(e) {
  if(e.keyCode == 32) {
    score += cpc;
    update();
  }
}
onkeyup = spacebar;

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

function clicked () {
  var randNumb = (Math.random()+1)*100;
  if (randNumb>99) {
    score = score+(cpc*2);
  }
  else {
    score+=cpc;
  }
  update();
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
