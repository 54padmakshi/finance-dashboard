export const calculateSummary = (transactions) => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expenses += t.amount;
    }
  });

  return {
    balance: income - expenses,
    income,
    expenses,
  };
};

export const getBalanceTrend = (transactions) => {
  let balance = 0;

  return transactions.map((t) => {
    if (t.type === "income") balance += t.amount;
    else balance -= t.amount;

    return {
      date: t.date,
      balance,
    };
  });
};

export const getCategoryData = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map((key) => ({
    category: key,
    value: map[key],
  }));
};