
import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props) => {

    let expenseContent = props.items.map((item) => {
        return <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    })

    if (expenseContent.length === 0)
        return (<h2 className='expenses-list__fallback'> No Record Found !! </h2>)


    return <ul className='expenses-list'>
        {expenseContent}
    </ul>
}

export default ExpenseList