export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// generateRandomColor()
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// Total spen by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if the expenseId === budgetId i passed in
    if (expense.budgetId !== budgetId) return acc

    // add the current amount to my total
    return acc += expense.amount
  }, 0);
  return budgetSpent;
};

// FORMATING
// Formatin percentages
export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimunFractionDigits: 0
    })
}

// Format Currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};
