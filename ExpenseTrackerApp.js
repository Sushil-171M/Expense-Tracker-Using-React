import React, { useState, useEffect } from "react";
import ExpenseTrackerForm from "./Components/ExpenseTrackerForm";
import ExpenseTableList from "./Components/ExpenseTableList";

const ExpenseTrackerApp = () => {
  const [expenseData, setExpneseData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("expenseData")) || [];
    setExpneseData(storedData);
  }, []);

  const addExpense = (newItems) => {
    setExpneseData((prevData) => {
      const newData = [...prevData, newItems];
      localStorage.setItem("expenseData", JSON.stringify(newData));
      return newData;
    });
  };

  const deleteExpense = (id) => {
    setExpneseData((prevData) => {
      const newData = prevData.filter((expense) => {
        return expense.id !== id;
      });
      localStorage.setItem("expenseData", JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="App">
      <ExpenseTrackerForm onAddExpense={addExpense} />
      <ExpenseTableList
        onDeleteExpense={deleteExpense}
        expenseData={expenseData}
      />
    </div>
  );
};

export default ExpenseTrackerApp;
