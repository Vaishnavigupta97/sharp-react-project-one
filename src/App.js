import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



function App() {
  const [expenses, setExpenses] = useState(
    [
      {
        id: "1",
        title: "Insurance",
        date: new Date(2023, 7, 15),
        price: 100,
        location: "Bangalore",
      },
      {
        id: "2",
        date: new Date(2024, 3, 25),
        title: "Book",
        price: 10,
        location: "Delhi",
      },
      {
        id: "3",
        date: new Date(2024, 10, 11),
        title: "Pen",
        price: 1,
        location: "Hyderabad",
      },
      {
        id: "4",
        date: new Date(2025, 1, 14),
        title: "Laptop",
        price: 200,
        location: "Mumbai",
      }]
  )

  const liftingdatafromNewExpense = (event) => {
    setExpenses((prevExpense) => {
      return [event, ...prevExpense]
    });
  }
  return (
    <>
      <div>
        <NewExpense onAddNewExpenseData={liftingdatafromNewExpense} />
        <Expenses expenses={expenses} />

      </div>
    </>
  );
}

export default App;
