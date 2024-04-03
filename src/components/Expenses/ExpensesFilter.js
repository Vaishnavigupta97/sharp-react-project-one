import "./ExpensesFilter.css";

const ExpensesFilter = (props) =>{
    const dropDownchangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    }
    return(
        <>
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>filter By Year</label>
                <select value={props.selected} onChange={dropDownchangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>  
        </>
    )
}
export default ExpensesFilter;