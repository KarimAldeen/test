import { Tabs } from 'antd'
import React, { useState } from 'react'
import type { TabsProps } from 'antd';
import { FaDownload } from 'react-icons/fa';

const Table = () => {
    const [Activetable, setActivetable] = useState<any>("1")
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'الانحراف المعياري للعلامات',
        },
        {
            key: '2',
            label: 'نسب النجاح بالمادة في المدارس',
        },
        {
            key: '3',
            label: 'تصنيف المدارس وفقاً لترتيب نسب النجاح',
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
        setActivetable(key)
    };
    return (
        <div className='Table'>
            <div className="table_tabs">
                <span>
                    ماالتقرير الذي تريده ؟
                </span>
                    <Tabs className='table_tabs' defaultActiveKey="1" items={items} onChange={onChange} />

            </div>
            <div className="table_header">
                <div>
                    <h6>

                        نسب النجاح في المدارس
                    </h6>

                    <p>100 مدرسة</p>
                </div>
                <div>
                    <button>
                        <FaDownload/> طباعة
                    </button>
                </div>
            </div>
            {/* <Page/> */}
        </div>
    )
}

export default Table