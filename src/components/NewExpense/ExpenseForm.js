import { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm() {
    const [userInput, setUserInput] = useState({
        enteredTitle : " ",
        enteredAmount : " ",
        enteredDate : " "
    });

    const titleChangeHandler = (event) =>{
        setUserInput((prevData) => {
            return{
        ...prevData,
        enteredTitle : event.target.value
            }
        });
    }
    const amountChangeHandler = (event) =>{
        setUserInput((prevData) => {
           return{
            ...prevData,
            enteredAmount : event.target.value
           }
        });
    }
    const dateChangeHandler = (event) =>{
        setUserInput((prevData) => {
            return{
            ...prevData,
            enteredDate : event.target.value
            }
        });
    }
    return (
        <>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min= "2023-1-1" max= "2024-12-31" onChange={dateChangeHandler} />
                    </div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>

        </>
    )
}
export default ExpenseForm;