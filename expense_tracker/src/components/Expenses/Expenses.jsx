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

   let filteredYear = props.items.filter((expense)=>{
         return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className="expenses">
            <ExpenseFilter onChageFilterHandler={filterHandler} />
            {filteredYear.map((item) => {
                return <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            })}
        </Card>
    );
};

export default Expenses;