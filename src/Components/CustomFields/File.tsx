import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const CustomFile: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info) => {

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setImageUrl(url);
            });
        }
    };
    const customRequest = async ({ onSuccess }: any) => {
        onSuccess();
    };
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <div className='CustomFile' >
                السحب والإفلات أو
                انقر هنا لتحديد الملف
            </div>
        </button>
    );

    return (
        <div className="ValidationField w-100">
                <label  className="text" >الصورة *</label>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                customRequest={customRequest}
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>

        </div>
    );
};

export default CustomFile;