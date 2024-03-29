import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseList from './ExpenseList'
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

       return (
        <Card className="expenses">
            <ExpenseFilter onChageFilterHandler={filterHandler} />
            <ExpenseList items = {filteredExpenses} />
        </Card>
    );
};

export default Expenses;