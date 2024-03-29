import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter'
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')
    const filterHandler = (data) => {
        setSelectedYear(data)
    }

    let filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    let expenseContent = filteredExpenses.map((item) => {
        return <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    })


    return (
        <Card className="expenses">
            <ExpenseFilter onChageFilterHandler={filterHandler} />
            {expenseContent.length === 1 ? (<div>
                {expenseContent}
                <p style={{color:'white'}}>Only single Expense here. Please add more...</p>
            </div>) : <div>{expenseContent}</div>
            }
        </Card>
    );
};

export default Expenses;