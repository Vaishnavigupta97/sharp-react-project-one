import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return(
        <>
        <div className="expenses">
            <ExpensesFilter selected = {filteredYear} onChangeFilter={changeFilterHandler} />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              location={expense.location}
            />
          )
        })}   
        </div>
     </>
    )
}
export default Expenses;