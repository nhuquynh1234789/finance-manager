form.onsubmit = async e => {
  e.preventDefault();
  await fetch("http://localhost:8080/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: amount.value,
      type: type.value,
      category: category.value,
      description: desc.value,
      date: new Date().toISOString().split("T")[0]
    })
  });
  loadSummary();
};

async function loadSummary() {
  const res = await fetch("http://localhost:8080/summary");
  const data = await res.json();
  summary.innerHTML = `
    <h3>Summary</h3>
    Income: ${data.income}<br>
    Expense: ${data.expense}<br>
    Balance: ${data.balance}
  `;
}

loadSummary();
