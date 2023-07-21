const btn = document.querySelector(".btn");
const bank = document.querySelector(".bank");
const container = document.querySelector(".container");
const form = document.querySelector("form");


const currentBalanceSpan = document.getElementById('currentBalance')
const withdrawMoneySpan = document.getElementById('withdMoney');


const withdrawInput = document.getElementById('withd');




const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');





btn.addEventListener("click", removeDiv);

function removeDiv(e) {
  e.preventDefault();
  
  container.style.display = "none";
  bank.style.display = "block";

  
}


depositBtn.addEventListener("click", function(){
  const depositInput = document.getElementById('depo').value;
  const depositFloat = parseFloat(depositInput);

  updateState('depoMoney',depositFloat);
  updateState('currentBalance',depositFloat);
  
})

function updateState(id,depositFloat){
  const depositMoneySpan = document.getElementById(id).innerText;
  const depositSpanFloat = parseFloat(depositMoneySpan)
  
  const depositTotal = depositSpanFloat + depositFloat;
  document.getElementById(id).innerText = depositTotal;
}

