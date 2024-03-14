import { useState } from 'react';
import {useGetDynamicWPagination ,useAddKeyToData,useColumns ,Table,useTableOnChange,PaginationOptions,ExpandedRow}from './'



const App: React.FC = () => {
  
  const { data: dataWpagination, isLoading } = useGetDynamicWPagination("products","products");
  const dataSource = useAddKeyToData(dataWpagination?.data?.data); 
  const columns = useColumns();
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record: any) => ({
    //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  
  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  };
  return (
    <Table<any>
      columns={columns}
      dataSource={dataSource}
      onChange={useTableOnChange()}
      loading={isLoading}
      className='DataTable'
      pagination={PaginationOptions(dataWpagination)}
      // expandable={{ expandedRowRender: (record:any) => <ExpandedRow key={record.id}  record={record} />}}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      rowClassName={(record, index) => getRowClassName(record, index)} // Apply row class name dynamically

    />

  );
}

export default App;
