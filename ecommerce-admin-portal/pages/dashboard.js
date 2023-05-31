import Layout from "@/components/Layout";
import { Bar, Doughnut } from "react-chartjs-2";
import React from "react";
import { CategoryScale ,BarElement, LinearScale,Chart,ArcElement } from "chart.js";
// Register the "category" scale
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const salesData = {
  labels: ['2014', '2015', '2016', '2017','2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [{
    label: '# of Votes',
    data: [1,3,2,7,5, 12, 7, 11, 10, 17],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}
const trafficData = {
  labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
  data: [20, 25,30,50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};
const BarGraph = () => {
  
    return (
      <div className="h-96 w-[60%]">
        <h2>Sales Analysis (Yearly)</h2>
        <Bar
          data={salesData}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  
};

const PieChart = () => (
  <div className="h-96 w-[40%]">
    <h2 >Traffic Detail</h2>
    <Doughnut
       data={trafficData}
       width={400}
       height={400}
    />
  </div>
  );
const Dashboard = () => {
  

  return (
    <Layout>
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">
        Analytical Data
      </h1>
      <div className="flex gap-20">

      <BarGraph />
      <PieChart />
      </div>
    </Layout>
  );
};

export default Dashboard;
