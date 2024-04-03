import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(){
return(
    <>
    <div className="new-expense">
    <ExpenseForm />
    </div>
    <p>this is New Expense</p>
    </>
)
}

export default NewExpense;