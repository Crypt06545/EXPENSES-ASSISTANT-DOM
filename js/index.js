const calcutaleBtn = document.getElementById("calculate");

// calculate Btn click event
calcutaleBtn.addEventListener("click", function () {
  const incomeInput = parseFloat(document.getElementById("income").value);
  const softwareInput = parseFloat(document.getElementById("software").value);
  const coursesInput = parseFloat(document.getElementById("courses").value);
  const internetInput = parseFloat(document.getElementById("internet").value);
  const savingsInput = parseFloat(document.getElementById("savings").value);
  const totalcost = softwareInput + coursesInput + internetInput;

  // calculate total cost
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalcost.toFixed(2);

  // Calculate remaining balance
  const remainingBalanceEl = document.getElementById("balance");
  const remainingBalance = incomeInput - totalcost;
  remainingBalanceEl.innerText = remainingBalance.toFixed(2);

  const savingBalaceEl = document.getElementById("savings-amount");
  const savingBalace = (remainingBalance * savingsInput) / 100;
  savingBalaceEl.innerText = savingBalace.toFixed(2);
});


// savings Btn click event


