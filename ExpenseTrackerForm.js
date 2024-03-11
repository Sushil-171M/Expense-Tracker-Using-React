import React, { useEffect, useState } from "react";
import ExpenstLists from "./ExpenseTableList";

const ExpenseTrackerForm = ({ onAddExpense }) => {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setDate] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !expenseAmount ||
      !expenseDescription ||
      !expenseCategory ||
      !expenseDate
    ) {
      setFormValid(true);
      return;
    }
    let items = {
      id: Math.floor(Math.random() * 1000),
      expenseAmount,
      expenseDescription,
      expenseCategory,
      expenseDate,
    };

    onAddExpense(items);

    setExpenseAmount(0);
    setExpenseDescription("");
    setExpenseCategory("");
  };

  const expenseAmountHandler = (e) => {
    setExpenseAmount(e.target.value);
  };

  const expenseDescriptionHandler = (e) => {
    setExpenseDescription(e.target.value);
  };

  const expenseCategoryHandler = (e) => {
    setExpenseCategory(e.target.value);
  };

  const expenseDateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        <b>Expense Tracker</b>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="expense" className="form-label">
              <b>Expense Amount :</b>
            </label>
            <input
              id="expense"
              type="number"
              name="expense"
              className="form-control"
              onChange={expenseAmountHandler}
              value={expenseAmount}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="expense" className="form-label">
              <b>Expense Category :</b>
            </label>
            <select
              id="expense"
              name="expense"
              className="form-control"
              onChange={expenseCategoryHandler}
              value={expenseCategory}
            >
              <option value="none">None</option>
              <option value="Movie">Movie</option>
              <option value="Grocery">Grocercy</option>
              <option value="Shopping">Shopping</option>
              <option value="House-Hold">House Hold Expense</option>
              <option value="Fees">Fees</option>
              <option value="Rent">Rent</option>
              <option value="Electricity">Electricity</option>
              <option value="Maintainces">Maintainces Charge</option>
              <option value="Laundary">Laundary</option>
              <option value="Personal Expense">Personal Expense</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <b>Description: </b>
            </label>
            <input
              id="description"
              type="Text"
              name="description"
              className="form-control"
              onChange={expenseDescriptionHandler}
              value={expenseDescription}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              <b>Date: </b>
            </label>
            <input
              id="date"
              type="date"
              className="form-control"
              name="date"
              onChange={expenseDateHandler}
              value={expenseDate}
            ></input>
          </div>

          <label htmlFor="button" className="form-label">
            <button
              type="Submit"
              id="button"
              className="btn btn-outline-primary"
            >
              Add Expense
            </button>
          </label>

          {formValid && (
            <p className="alert alert-danger mt-3">
              Please fill out all fields.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseTrackerForm;
