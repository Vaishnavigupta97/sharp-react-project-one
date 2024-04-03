import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";



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

    const liftingdatafromNewExpense = (event) => {
      const showData = {...event, id: Math.random().toString()};
      console.log(showData);
    }
  return (
    <>
      <div>
        <NewExpense onAddNewExpenseData = {liftingdatafromNewExpense}/>
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
      </div>
    </>
  );
}

export default App;
