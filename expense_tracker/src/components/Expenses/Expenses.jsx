import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter'
const Expenses = (props) => {
     const [items, setItems] = useState(props.items)

    const getFilterValue = (data) => {
        setItems(items.filter((item) => {
            return item.date.getFullYear().toString() === data
        }))
    }


    return (
        <Card className="expenses">
            <ExpenseFilter getFilterValue={getFilterValue} />
            {items.map((item) => {
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