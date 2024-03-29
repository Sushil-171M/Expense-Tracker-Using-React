import React from 'react'
import './ExpenseForm.css'
const AddNewExpenseButton = (props) => {

    return (

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    <button className="new-expense__actions" type="click" onClick={props.btnHandler} >Add New Expenses </button>
                </label>

            </div>

        </div>

    )

}

export default AddNewExpenseButton