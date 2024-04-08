import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
          console.log(props.chartData);
    return (
        <>
            <Chart chartExpenses={props.filteredExpensesForChart} />
            {/* <Chart /> */}
            <p>this is expenseChart</p>
        </>
    )

}
export default ExpensesChart;