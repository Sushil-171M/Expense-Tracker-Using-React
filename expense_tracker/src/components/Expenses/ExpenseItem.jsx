import React , { useState }from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {

    const [title1,setTitle] = useState(title)
    const clickHandler = () =>{
             setTitle('Updated!!!')
             console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title1}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>CLick Here</button>
        </Card>
    );
};

export default ExpenseItem;