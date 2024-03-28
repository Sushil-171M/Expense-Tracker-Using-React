import React, { useState } from 'react'
import './ExpenseForm.css'


const ExpenseForm = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(null)

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Expense Amount</label>
                    <input type="number" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;