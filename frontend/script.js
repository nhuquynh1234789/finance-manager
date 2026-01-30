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
