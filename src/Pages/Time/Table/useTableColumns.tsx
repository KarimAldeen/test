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
      title: "الإسم",
      dataIndex: 'Name',
      key: "Name",
      align:"center",
      ellipsis: true,
      render: (text, record) => {
        return (
          <div className="ImageWname">       
            <ColumnsImage  src={"../Layout/DefultStudentImage.png"} />
            <span >
              {record?.name}
             
            </span>
          </div>
        )
      }
    },
    {
      title: 'كلمة المرور',
      dataIndex: 'price',
      key: "price",
      align:"center"
    },
    {
      title: 'اسم الأب',
        dataIndex: ['categories', 'name'],
      key: "categories",
      align:"center"
    },
    {
      title: 'تاريخ الولادة',
      dataIndex: 'description',
      key: "description",
      align:"center",
      ellipsis: true,

      
    },
    {
      title: 'مكان الولادة',
      dataIndex: 'description',
      key: "description",
      align:"center",
      ellipsis: true,

      
    },

    {
      title: "نشاطات الطلاب",
      dataIndex: 'Name',
      key: "Name",
      align:"center",
      ellipsis: true,
      render: (text, record) => {
        return (
          <button className="ClickHere" onClick={()=> navigete(`/student/${record?.id}/activity`)}>
            انقر هنا
          </button>
        )
      }
    },


    {
      title: 'Actions',
      key: 'actions',
      align:"center",
      render: (text, record,index) => {


        const handleEdit = (record: any) => {
          console.log('Edit action for record:', record);
          navigete(`/products/${record?.id}`)
        };

        const handleDelete = (record: any) => {
          console.log('Delete action for record:', record);

        };
        const confirm = (e: any) => {
          console.log(e);
          mutate({ id: record?.id })


        };

        const cancel = (e: any) => {
          console.log(e);
          message.error('Delete Canceled');
        };
        const className = index % 2 === 0 ? 'even-row' : 'odd-row';

        return (
          <Space size="middle" className={className}> 
            <MdOutlineEdit size={22}  style={{ color: '#A098AE' }} onClick={() => handleEdit(record)} />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <RiDeleteBin6Fill  size={22} style={{ color: '#C11313' }} />
            </Popconfirm>
          </Space>
        )
      },
    },
  ];

  return columns;
};
