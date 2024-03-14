import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart: React.FC = () => {
  const chartRef = useRef<any>(null); // Ref for the chart component
  const [options, setOptions] = useState<any>({
    chart: {
      type: 'area',
      toolbar: {
        show: false // Disable the toolbar
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  });
  const [series, setSeries] = useState<any>([
    { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100]  , color:"#FCC43E"},
    { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] ,color:"#FB7D5B" }
  ]);



  return (
    <div className='AreaChart'>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" className="ReactApexChartArea" height={500} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default AreaChart;
