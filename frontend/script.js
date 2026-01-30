const form = document.getElementById("form");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const desc = document.getElementById("desc");
const summary = document.getElementById("summary");

let income = 0;
let expense = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const amt = Number(amount.value);

  if (amt <= 0) {
    alert("Enter valid amount");
    return;
  }

  if (type.value === "INCOME") {
    income += amt;
  } else {
    expense += amt;
  }

  summary.innerHTML = `
    <h3>Summary</h3>
    <p>Income: ${income}</p>
    <p>Expense: ${expense}</p>
    <p><b>Balance: ${income - expense}</b></p>
  `;

  form.reset();
});
