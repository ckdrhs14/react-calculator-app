import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md';

const ExpenseList = ({handleDelete, expenses, handleEdit}) => {
    return (
        <>
            <ul className='list'>
                {expenses.map(expense => {
                    return (
                        <ExpenseItem
                            expense={expense}
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}/>
                    )
                })}
            </ul>
        </>
    )
}

export default ExpenseList
