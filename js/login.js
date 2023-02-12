document.getElementById("submit-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value;

  const passwordInput = document.getElementById("password-input");
  const password = passwordInput.value;

  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "http://127.0.0.1:5500/bank.html";
  } else {
    alert("invalid user");
  }
});
