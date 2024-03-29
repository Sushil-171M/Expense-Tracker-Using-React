import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

    const onExpenseHandler = (expenseData) => {
        props.onUserInputData({
            ...expenseData,
            id:Math.floor(Math.random()*1000)
        })

        props.btnHandler(false);

    }

    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseHandler={onExpenseHandler} />
        </div>
    )

}

export default NewExpense