import React, { useState } from 'react'

const ExpenseFilter = (props) => {

    const [selectedYear, setSelectedYear] = useState(2020)
    const filterHandler = (e) => {
        setSelectedYear(e.target.value)
        props.getFilterValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor="filter">Filter</label>
            <select id='filter' onChange={filterHandler} value={selectedYear}>
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
            </select>
        </div>
    )
}


export default ExpenseFilter