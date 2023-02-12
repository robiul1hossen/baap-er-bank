document.getElementById("deposit-btn").addEventListener("click", function (e) {
  const depositInput = document.getElementById("deposit-input");
  const depositValue = parseFloat(depositInput.value);

  if (depositValue <= 0 || depositValue == "") {
    alert("You have to deposit a minimum amount");
  } else {
    let initialDeposit = document.getElementById("initial-deposit").innerText;
    let initialDepositValue = parseFloat(initialDeposit);
    let output = depositValue + initialDepositValue;
    document.getElementById("initial-deposit").innerText = output;

    let initialBalance = document.getElementById("initial-balance").innerText;
    let initialBalanceValue = parseFloat(initialBalance);
    let output2 = depositValue + initialBalanceValue;
    document.getElementById("initial-balance").innerText = output2;
  }
});

/* WithDraw Amount function */

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input").value;
  const withdrawInputValue = parseFloat(withdrawInput);

  if (withdrawInputValue <= 0) {
    alert("You have to withdraw a minimum amount");
  } else {
    let initialWithdraw = document.getElementById("initial-withdraw").innerText;
    let initialWithdrawValue = parseFloat(initialWithdraw);

    let initialBalance2 = document.getElementById("initial-balance").innerText;
    let initialBalanceValue2 = parseFloat(initialBalance2);
    if (initialBalanceValue2 < withdrawInputValue) {
      alert("you don't have sufficient balance");
    } else {
      const withdrawAmount = withdrawInputValue + initialWithdrawValue;
      document.getElementById("initial-withdraw").innerText = withdrawAmount;

      let output2 = initialBalanceValue2 - withdrawInputValue;
      document.getElementById("initial-balance").innerText = output2;
    }
  }
});
