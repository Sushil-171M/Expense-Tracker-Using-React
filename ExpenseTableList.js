import React from "react";

const ExpenseTableList = ({ onDeleteExpense, expenseData }) => {
  let expenseDataRow = null;
  if (Array.isArray(expenseData) && expenseData.length > 0) {
    expenseDataRow = expenseData.map((expense) => {
      return (
        <div className="container mt-2">
          <tr key={expense.id}>
            <td>Rs{expense.expenseAmount}</td>
            <td>{expense.expenseCategory}</td>
            <td>{expense.expenseDate}</td>
            <td>{expense.expenseDescription}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  onDeleteExpense(expense.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </div>
      );
    });
  } else {
    expenseDataRow = (
      <tr>
        <td colSpan="5" className="text-center">
          You Have not added any Expenses yet !!! Thank You
        </td>
      </tr>
    );
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        <b> History of All Expenses : </b>
      </h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Expense Amount</th>
            <th>Expense Category</th>
            <th>Expense Date</th>
            <th>Expense Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{expenseDataRow}</tbody>
      </table>
    </div>
  );
};

export default ExpenseTableList;
