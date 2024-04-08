import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expensesOnlyArray = props.chartExpenses.map((montExpenseData) => {
    return montExpenseData.price;
  })
  const maxValue = Math.max(...expensesOnlyArray);
  console.log(maxValue);
  const chartData = [
    {expenseMonth: "Jan", expenseValue: 0},
    {expenseMonth: "Feb", expenseValue: 0},
    {expenseMonth: "Mar", expenseValue: 0},
    {expenseMonth: "Apr", expenseValue: 0},
    {expenseMonth: "May", expenseValue: 0},
    {expenseMonth: "Jun", expenseValue: 0},
    {expenseMonth: "Jul", expenseValue: 0},
    {expenseMonth: "Aug", expenseValue: 0},
    {expenseMonth: "Sep", expenseValue: 0},
    {expenseMonth: "Oct", expenseValue: 0},
    {expenseMonth: "Nov", expenseValue: 0},
    {expenseMonth: "Dec", expenseValue: 0},

  ];
//   console.log(props.chartExpenses);
// console.log(props.chartExpenses[1]);
  // for(let i = 0; i < props.chartExpenses.length; i++){
  //   chartData[props.chartExpenses[i].date.getMonth()].expenseValue +=  
  //    props.chartExpenses[i].price;
  // }
  // console.log(props.chartExpenses);
  // console.log(chartData);
 
for(let expense of props.chartExpenses){
  chartData[expense.date.getMonth()].expenseValue += expense.price;
}
  
  return(
 <div className="Chart">
  {chartData.map((monthData) => {
    return <ChartBar
             key={monthData.expenseMonth}
             label = {monthData.expenseMonth}
             value={monthData.expenseValue}
             maxValue= {maxValue} />
  })}
  </div>
    )
}
export default Chart;

// import React from "react";
// const Chart = (props) => {
//    console.log(props.chartExpenses);
// }
// export default Chart;