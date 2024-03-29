import React, { useState } from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {

    const [year,setYear]  = useState(2020)
    const filterHandler = (e) => {
        props.onChageFilterHandler(e.target.value)
        setYear(e.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div  className='expenses-filter__control'>
            <label htmlFor="filter">Filter By Year</label>
            <select id='filter' onChange={filterHandler} value={year}>
                <option value='2020'>
                    2020
                </option>
                <option value='2021'>
                    2021
                </option>
                <option value='2022'>
                    2022
                </option>
                <option value='2023'>
                    2023
                </option>
                <option value='2024'>
                    2024
                </option>
                <option value='2025'>
                    2025
                </option>
            </select>
        </div>
        </div>
       
    )
}


export default ExpenseFilter