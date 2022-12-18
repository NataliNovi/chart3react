import React from "react";
import './App.css';
import { Chart } from "react-google-charts";
import {yearlyActivityData} from './const_data.js';
import {daylyActivityData} from './const_data.js';



export const yaerlyActivityChartOptions = {
  title: "My Yearly Activities",
  is3D: true,
  legend: {
  position: "left"},
  colors: ['#e8af2a', '#d14747', '#fdd460', '#de9440', '#ff4958', '#f6c7b6', '#fc8c6a'],
  backgroundColor: '#e9e7eb',
  pieSliceTextStyle: {
  color: 'black'
}
};

export const dailyActivityChartOptions = {
  title: "My Daily Activities",
  responsive: true,
  legend: {
  position: "left" },
  backgroundColor: '#efecd2',
};


 function App() {
 
  return (
    <div className="App">


      <Chart
      chartType="PieChart"
      data={yearlyActivityData}
      options={yaerlyActivityChartOptions}
      width={"100%"}
      height={"400px"}
    />

      <Chart
      chartType="PieChart"
      data={daylyActivityData}
      options={dailyActivityChartOptions}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
