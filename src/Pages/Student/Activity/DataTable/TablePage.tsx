import { useState } from 'react';
import { useGetDynamicWPagination, useAddKeyToData, useColumns, Table, useTableOnChange, PaginationOptions, ExpandedRow } from './'


import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const App: React.FC = () => {

  const { data: dataWpagination, isLoading } = useGetDynamicWPagination("products", "products");
  const dataSource = useAddKeyToData(dataWpagination?.data?.data);
  const columns = useColumns();

  return (
    <div className='DataTableWHeader'>
      <header> <SlArrowRight /> محصلة التسميعات الدورية والمذاكرت والامتحانات بنسبة مئوية  <SlArrowLeft /> </header>
      <Table<any>
        columns={columns}
        dataSource={dataSource}
        onChange={useTableOnChange()}
        loading={isLoading}
        className='DataTable'
        pagination={false}
        showHeader

      />
      <footer>
        <span>
          النسبة المئوية العامة لنسبة الطلاب
        </span>
        <div> % </div>
      </footer>
    </div>

  );
}

export default App;
