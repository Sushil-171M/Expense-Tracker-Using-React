import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e44",
      title: "New Desk 1 (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e45",
      title: "New Desk 2(Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ]);


  const addExpenseHandler = (data) => {
    setExpenses((prevState) => {
      return [...prevState, data]
    })
  }

  return (
    <>
      <NewExpense onUserInputData={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;