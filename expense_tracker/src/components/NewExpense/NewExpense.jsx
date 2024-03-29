import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

    const [clicked, setClicked] = useState(false)
    const onExpenseHandler = (expenseData) => {
        props.onUserInputData({
            ...expenseData,
            id: Math.floor(Math.random() * 1000)
        })
    }

    const btnHandler = () => {
        setClicked(true)
    }
    const cancleHandler = () => {
        setClicked(false)
    }

    return (
        <div className='new-expense'>
            {!clicked && <button onClick={btnHandler} >Add New Expense </button>}
            {clicked && <ExpenseForm onExpenseHandler={onExpenseHandler} cancleHandler={cancleHandler} />}

        </div>
    )

}

export default NewExpense