import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar, Col, DatePicker, Popover, Radio, Row, Select, Typography, theme } from 'antd';
import type { CalendarProps } from 'antd';
import { IoMdArrowDropdown } from 'react-icons/io';

dayjs.extend(dayLocaleData);

const App: React.FC = () => {
  const { token } = theme.useToken();

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const [year, setYear] = useState<number>(dayjs().year()); // Initialize year state with the current year
  const [month, setMonth] = useState<number>(dayjs().month()); // Initialize month state with the current month
  const onChangeDatePicker = (value: any) => {
    if (value) {
      setYear(value.$y); // Extract year from the selected date and update the year state
      setMonth(value.$M); // Extract month from the selected date and update the month state
    }else{
      const today = dayjs(); // Get the current date
      setYear(today.year()); // Update the year state to the current year
      setMonth(today.month());
    }
    
  }
  const popoverDays = [
    { day: 10, month: 3, year: 2024, title: 'مسابقة الشطرنج الدولية', time: 'الساعة 11' },
    { day: 22, month: 3, year: 2024, title: 'مسابقة الشطرنج الدولية', time: 'الساعة 12' },
    // Add more dates as needed...
  ];

  const dateCellRender = (value: dayjs.Dayjs) => {
    const day = value.date();
    const month = value.month() + 1;
    const year = value.year();
  
    // Check if the current date is in the popoverDays array
    const matchingDay = popoverDays.find(date => date.day === day && date.month === month && date.year === year);
  
    if (matchingDay) {
      return (
        <Popover
        placement='top'
        className='CalenderPop'
        rootClassName='CalenderPop'
          content={
            <div className='Calendar_Popover'>
              <h5>{matchingDay.title}</h5>
              <h6>{matchingDay.time}</h6>
            </div>
          }
          open={true}
        >
          <div className='Calendar_ActiveDiv'>
            {day}
          </div>
        </Popover>
      );
    }
  
    return day;
  };
  



  return (
    <div className={"CalendarSection"}>
      <Calendar
        fullscreen={false}
        fullCellRender={dateCellRender} // Render custom popover for specific days
        value={dayjs(`${year}-${month + 1}-01`)} // Set value of the Calendar based on year and month states
        
        headerRender={({ value }) => {
          const localeData = value.localeData();
          const months = Array.from({ length: 12 }, (_, i) => localeData.monthsShort(dayjs().month(i)));
          const options = Array.from({ length: 20 }, (_, i) => dayjs().year() - 10 + i);

          return (
            <div className='CalendarHeader'>
            <h4>تقويم المدرسة</h4>
            <DatePicker
              suffixIcon={<IoMdArrowDropdown size={30} />}
              // onChange={onChangeDatePicker}
              onChange={(newDate: number) => onChangeDatePicker(newDate)} // Handle year change

              picker="month" // Set picker to "month" to allow users to select only the month and year
            />
              {/* <Row gutter={8}>
                <Col>
                  <Select
                    size="small"
                    className="my-year-select"
                    value={year}
                    onChange={(newYear: number) => onChangeDatePicker(newYear, 'year')} // Handle year change
                  >
                    {options.map((year) => (
                      <Select.Option key={year} value={year}>
                        {year}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    value={month}
                    onChange={(newMonth: number) => onChangeDatePicker(newMonth, 'month')} // Handle month change
                  >
                    {months.map((month, index) => (
                      <Select.Option key={index} value={index}>
                        {month}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </Row> */}
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default App;
