import React, { useState } from 'react'
import './ExpenseForm.css'


const ExpenseForm = () => {

    //1st method to declare State
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(null)

    // 2nd method to declare state

    // const [formObj, setFormObj] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''

    // })

    const titleHandler = (e) => {
        // 1st method to set data for 1st method of state declared
         setTitle(e.target.value)

        //2nd methoda to handle state object
       
        // setFormObj({
        //     ...formObj,
        //     title: e.target.value
        // })


       // using callback which takes prevState as argument
        // setFormObj((prevState) => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // })
    }

    const amountHandler = (e) => {
         setAmount(e.target.value)

        // setFormObj({
        //     ...formObj,
        //     amount: e.target.value
        // })

        // setFormObj((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: e.target.value
        //     }
        // })
    }
    const dateHandler = (e) => {
         setDate(e.target.value)

        // setFormObj({
        //     ...formObj,
        //     date : e.target.value
        // })

        // setFormObj((prevState) => {
        //     return {
        //         ...prevState,
        //         date: e.target.value
        //     }
        // })
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