import React from "react";
import ExpenseForm from './ExpenseFrom';
import './NewExpense.css';

function NewExpense() {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )
}

export default NewExpense;