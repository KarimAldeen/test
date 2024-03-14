import { Radio, Select } from 'antd';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { IoMdArrowDropdown } from "react-icons/io";

const ColumnChart: React.FC = () => {
  const series = [
    {
      name: 'غياب',
      data: [44, 55, 57, 56, 61, 58],
      color: "#FB7D5B"

    },
    {
      name: 'حضور',
      data: [76, 85, 70, 98, 87, 80],
      color: "#FCC43E"

    }
  ];

  const options: any = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    // yaxis: {
    //   title: {
    //     text: '$ (thousands)'
    //   }
    // },
    fill: {
      opacity: 1,
      colors: ['#FB7D5B', '#FCC43E'], // Red and Green colors

    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " طالب";
        }
      }
    }
    , legend: {
      show: false // Hide the legend
    }
  };
  const [value, setValue] = useState(1);


  const handleChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='ColumnChart'>
      <div className='ColumnChart_header'>
        <span>
          الغياب المتكرر
        </span>

          <span className='Legend'>
            <div data-attr="red">
              غياب
              
            </div>
            <div>
              حضور
              
            </div>
          </span>

        <Select
          defaultValue="هذا الأسبوع"
          onChange={handleChangeSelect}
          suffixIcon={<IoMdArrowDropdown size={30} />}
          options={[
            { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
            { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
            { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
          ]}
        />
      </div>
      <div className='ColumnChartWrapper' id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={"100%"}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ColumnChart;
