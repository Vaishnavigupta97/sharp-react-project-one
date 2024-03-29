// import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Insurance",
      date: new Date(2023, 7, 15),
      price: 100,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2023, 3, 25),
      title: "Book",
      price: 10,
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: 1,
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: 200,
      location: "Mumbai",
    },];
  return (
    <>
      <div className="expense-item">
        {expenses.map((expense) => {
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
        <p>hbjjjjjjj</p>
      </div>
    </>
  );
}

export default App;
