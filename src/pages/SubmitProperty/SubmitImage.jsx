import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import SubmitHeading from './SubmitHeading';

export default function SubmitImage(props) {

    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    const onBasicUploadAuto = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
    return (
        <div className='mt-4'>
            <SubmitHeading goBack={() => props.setState({ display: 'form' })} title='Select Image(s)' />
            <Toast ref={toast}></Toast>
            <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={500000}
                emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />
            <hr />
            <button onClick={() => {
                props.setState({ display: 'loading' })
            }} className='btn btn-success  pull-right'>Upload</button>
        </div>
    )
}
