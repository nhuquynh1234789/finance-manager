const form = document.getElementById("form");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const desc = document.getElementById("desc");
const summary = document.getElementById("summary");

let income = 0;
let expense = 0;

form.onsubmit = e => {
  e.preventDefault();

  const amt = Number(amount.value);

  if (type.value === "INCOME") income += amt;
  else expense += amt;

  summary.innerHTML = `
    <h3>Summary</h3>
    Income: ${income}<br>
    Expense: ${expense}<br>
    Balance: ${income - expense}
  `;

  form.reset();
};
