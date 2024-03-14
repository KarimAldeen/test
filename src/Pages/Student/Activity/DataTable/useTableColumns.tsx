import { Popconfirm, Space, TableColumnsType, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { usePostDynamic } from "../../../../api/Route/Post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteDynamic } from "../../../../api/Route/Delete";
import { Table } from 'antd';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const useColumns = () => {
  const [value, setvalue] = useState('')
  const { mutate } = useDeleteDynamic("products", `products`);
  const { mutate: mutateStatus } = usePostDynamic("products", `products/status`);
  const navigete = useNavigate()
  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  };
  const columns: TableColumnsType<any> = [
    // Table.EXPAND_COLUMN,
    {
      title: 'المادة',
      dataIndex: 'price',
      key: "price",
      align:"center"
    },
  
    {
      title: 'التسميعات الدورية',
        dataIndex: ['categories', 'name'],
      key: "categories",
      align:"center"
    },
    {
      title: 'المذاكرة الاولى',
      dataIndex: 'description',
      key: "description",
      align:"center",
      ellipsis: true,

      
    },
    {
      title: 'المذاكرة الثانية',
      dataIndex: 'description',
      key: "description",
      align:"center",
      ellipsis: true,

      
    },
    {
      title: 'الامتحان النصفي',
      dataIndex: 'price',
      key: "price",
      align:"center"
    },
    {
      title: 'الامتحان النهائي',
      dataIndex: 'price',
      key: "price",
      align:"center"
    },
  ];

  return columns;
};
