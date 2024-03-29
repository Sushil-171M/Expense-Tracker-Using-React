import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

    const onExpenseHandler = (expenseData) => {
        props.onUserInputData({
            ...expenseData,
            id:Math.floor(Math.random()*1000)
        })
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseHandler={onExpenseHandler} />
        </div>
    )

}

export default NewExpense