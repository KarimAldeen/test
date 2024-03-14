import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import useFormField from '../../../Hooks/useFormField';
import { ImageBaseURL } from '../../../api/config';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];



const DropFile = ({ name, label, onChange, isDisabled,placholder,className, props ,no_label}: any) => {
    
  const { formik, t ,isError} = useFormField(name, props)
  let FormikName = formik.values[name];
  const FormikimageUrl = formik.values[name] ? ImageBaseURL + FormikName :  '';
  
  const [imageUrl, setImageUrl] = useState<string>(FormikimageUrl);
    const getBase64 = (img: FileType, callback: (url: string) => void) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result as string));
      reader.readAsDataURL(img);
  };

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'done') {
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
                {t("السحب والإفلات أو  انقر هنا لتحديد الملف")}
            </div>
        </button>
    );

    return (
        <div className="ValidationField w-100">
                 <label htmlFor={name} className="text">
        {t(`${label || name}`)}
      </label>
            <Upload
                name="avatar"
                listType="picture-card"
                className={`avatar-uploader ${className}`}
                showUploadList={false}
                customRequest={customRequest}
                onChange={onChange || handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>

        </div>
    );
};

export default DropFile;