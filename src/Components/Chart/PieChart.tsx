import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
   const series = [44, 55, 13] as any;
   const options :any = {
    series: [44, 55, 13],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default PieChart;
