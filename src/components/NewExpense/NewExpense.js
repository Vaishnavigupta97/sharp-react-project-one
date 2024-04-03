import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const expenseFormData = (event) => {
        const expenseData = { ...event, id: Math.random().toString() };
        props.onAddNewExpenseData(expenseData);
        setIsEditing(false);
    }
    const buttonClickHandler = () => {
        setIsEditing(true);
    }
    const cancelFormhandler = () =>{
        setIsEditing(false);
    }
    return (
        <>
            <div className="new-expense">
                {isEditing === false && (<button type="button" onClick={buttonClickHandler}>Add Expense</button> )}
                {isEditing === true && (<ExpenseForm onaddDataByExpenseForm={expenseFormData} onCancel={cancelFormhandler} />)}
            </div>
        </>
    )
}

export default NewExpense;