import React from "react";

import "./ExpenseForm.css";
//We can use either function or const only our preference
const ExpenseForm = () => {
    // Vanilla JavaScript
    //document.getElementById('').addEventListener('click', (event) => {})

    const titleChangeHandler = (event) => { //event - default constant for any event to be hanbdled
        console.log(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" minLength={2} onInput={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
