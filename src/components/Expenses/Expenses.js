import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    let expenseContent = <p>No Expenses Found</p>;
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((expense) => {
            return (
                <>
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                        location={expense.location}
                        />
                        {filteredExpenses.length === 1 && <p>Only one expense here. Please add more</p>}
                </>

            )
        })
    }
    

    return (
        <>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
                <ExpensesChart filteredExpensesForChart={filteredExpenses} />
                {/* <ExpensesChart /> */}
                {expenseContent}
            </div>
        </>
    )
}
export default Expenses;