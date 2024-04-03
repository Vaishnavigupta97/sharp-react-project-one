// Write your code here
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props){  
  // let price = props.price;
  let [price, setPrice] = useState(props.price);
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle("new Title");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
        <button onClick={() => setPrice(0)}>Delete Expense</button>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;