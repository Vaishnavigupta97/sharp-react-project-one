import { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm(props) {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : " ",
    //     enteredAmount : " ",
    //     enteredDate : " "
    // });
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date (enteredDate),
        }
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onaddDataByExpenseForm(expenseData);
    }
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min= "2023-1-1" max= "2024-12-31" onChange={dateChangeHandler} required />
                    </div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>

        </>
    )
}
export default ExpenseForm;