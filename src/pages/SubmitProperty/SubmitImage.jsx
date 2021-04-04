import React, { useRef, useCallback } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import SubmitHeading from './SubmitHeading';
import { useDropzone } from 'react-dropzone'

export default function SubmitImage(props) {

    const toast = useRef(null);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles) 
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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
            <SubmitHeading goBack={() => props.setState({ ...props.state, display: 'form' })} title='Select Image(s)' />
            <Toast ref={toast}></Toast>
            {/* <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={500000}
                emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} /> */}
            <div {...getRootProps()} className='text-center'>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <div className='border'>
                            <p className='m-0 h6'>Select File(s)</p>
                            <div><i className='ti ti-plus'></i></div>
                        </div>
                }
            </div>
            <hr />
            <button onClick={() => {
                props.setState({ ...props.state, display: 'loading' })
                console.log('sending ----', props.state)
            }} className='btn btn-success  pull-right'>Upload</button>
        </div>
    )
}
