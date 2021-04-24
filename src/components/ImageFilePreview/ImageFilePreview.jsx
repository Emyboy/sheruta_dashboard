import React from 'react'
import { CardImg } from 'react-bootstrap';

export default function ImageFilePreview({
    files,
    removeFile
}) {
    return (
        <>
            {files.map((val, i) => {
                return <>
                    <tr className='border m-0 d-flex justify-content-between p-1' key={i}>
                        <td><CardImg src={URL.createObjectURL(val)} responsive style={{ height: '90px', width: '90px' }} /></td>
                        {/* <td>Otto</td> */}
                        <td><span onClick={() => removeFile(val)} className='btn-danger btn mt-4'>Remove</span></td>
                    </tr>
                </>
            })}

        </>
    )
}
