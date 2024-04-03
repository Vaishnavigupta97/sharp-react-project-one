import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props){
    const expenseFormData =(event) =>{
        const expenseData = {...event, id: Math.random().toString()};
        props.onAddNewExpenseData(expenseData);
    }
return(
    <>
    <div className="new-expense">
    <ExpenseForm onaddDataByExpenseForm = {expenseFormData}/>
    </div>
    </>
)
}

export default NewExpense;