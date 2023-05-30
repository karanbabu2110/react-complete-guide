import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


export default function ExpenseItem(props) {
  //we can give any name instead props 
  const [title, setTitle] = useState(props.title);
  //First element{title} for which value we are changing.
  // Second Element{setTitle} is a function to change value.
  const clickHandler = () => {
    setTitle('Updated!!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
