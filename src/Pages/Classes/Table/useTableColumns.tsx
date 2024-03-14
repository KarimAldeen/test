import { Popconfirm, Space, TableColumnsType, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import ColumnsSwitch from "../../../Components/Columns/ColumnsSwitch";
import { usePostDynamic } from "../../../api/Route/Post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteDynamic } from "../../../api/Route/Delete";
import { Table } from 'antd';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useModalState } from "../../../zustand/Modal";

export const useColumns = () => {
  const [value, setvalue] = useState('')
  const { mutate } = useDeleteDynamic("products", `products`);
  const { mutate: mutateStatus } = usePostDynamic("products", `products/status`);
  const navigete = useNavigate()
  const {isOpen,setIsOpen} = useModalState(state => state)

  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  };
  const columns: TableColumnsType<any> = [
    // Table.EXPAND_COLUMN,

    {
      title: 'كلمة المرور',
      dataIndex: 'price',
      key: "price",
      align: "center"
    },
    {
      title: 'اسم الأب',
      dataIndex: ['categories', 'name'],
      key: "categories",
      align: "center"
    },
    {
      title: 'اسم الأب',
      dataIndex: ['categories', 'name'],
      key: "categories",
      align: "center"
    },




    {
      title: '',
      key: 'actions',
      align: "center",
      width: "25vw",
      render: (text, record, index) => {


        const handleEdit = (record: any) => {
          // console.log('Edit action for record:', record);
          // navigete(`/products/${record?.id}`)
          setIsOpen()
        };

        const className = index % 2 === 0 ? 'even-row buttonAction' : 'odd-row buttonAction';

        return (
          <div  className={className}>
          <button className="EditButton" onClick={handleEdit}>
          تعديل
            </button>
            <button className="DeleteButton">
            حذف
            </button>
          </div>
        )
      },
    },
  ];

  return columns;
};
