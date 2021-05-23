import React, { useCallback, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';
// import SubmitHeading from './SubmitHeading';
import { CardImg, Modal } from 'react-bootstrap';
import { storage } from '../../Firebase';
import store from '../../redux/store/store';
import { v4 as uuidv4 } from 'uuid';
import { Spinner } from 'react-activity';
import axios from 'axios';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import ImageFilePreview from '../../components/ImageFilePreview/ImageFilePreview';

const auth = store.getState().auth;
const theState = JSON.parse(localStorage.getItem('state'))

const mapStateToProps = state => ({
    auth: state.auth
})

// const folderName = uuidv4() + `@${new Date().toJSON()}`
const SubmitImage = connect(
    mapStateToProps
)(props => {
    const [state, setState] = useState({
        loading: false,
        progress: 0,
        files: [],
        image_urls: []
    })
    const [folderName, setFolderName] = useState(uuidv4() + `@${new Date().toJSON()}`)
    const toast = useRef(null);
    const { addToast } = useToasts();

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // console.log('SELECTED FILE', acceptedFiles)
        state.files.push(acceptedFiles[0])
    }, [state.files]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = file => {
        const newArray = []
        state.files.map(val => file !== val ? newArray.push(val) : null)
        setState({ ...state, files: newArray })
        // console.log('NEW STATE --', state)
    }

    const formatData = () => {
        const parentState = props.state;
        return {
            ...parentState,
            amenities: parentState.amenities.map(val => val.value),
            categorie: parentState.category.id,
            statu: parentState.statu ? parentState.statu.value : null,
            payment_type: parentState.payment_type ? parentState.payment_type.value : null
        }
    }

    const sendToDb = () => {
        console.log('sending to db ---', formatData());
        console.log('auth.jwt ---', auth.jwt)
        axios(process.env.REACT_APP_API_URL + '/properties', {
            method: 'POST',
            headers: {
                Authorization:
                    `Bearer ${auth.jwt}`,
            },
            data: {
                ...formatData(),
                image_urls: state.image_urls,
                uid: folderName,
                agent: props.auth.agent.id
            }
        })
            .then(res => {
                console.log(res);
                props.setState({ ...props.state, display: 'success' })
            })
            .catch(err => {
                props.setState({ ...props.state, display: 'error' })
                console.log(err)
            })
    }

    const uploadImages = () => {
        console.log('uploading image for ----', props)
        props.setState({ ...props.state, display: 'loading' })
        state.files.map((val, i) => {
            var uploadTask = storage.ref().child(`images/properties/${props.auth.agent.id}/${folderName}/image_${i}`).put(val);
            uploadTask.on('state_changed', // or 'state_changed'
                (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    props.setState({ ...props.state, progress: progress, display: 'loading' })
                },
                (error) => {
                    props.setState({ ...props.state, display: 'error' })
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;
                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        state.image_urls.push(downloadURL)
                        console.log('IMAGE URLS --', state.image_urls)
                        console.log(state.image_urls.length)
                        if (state.image_urls.length === state.files.length) {
                            sendToDb()
                        }
                    });
                }
            );


        });

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!props.state.location && !props.state.google_location) {
            addToast('Please Select A Location', { appearance: 'error', autoDismiss: true })
        } else if (!props.state.statu) {
            addToast('Please Select One Status', { appearance: 'error', autoDismiss: true })
        } else if (props.state.amenities.length === 0) {
            addToast('Amenities Can\'t Be Empty', { appearance: 'error', autoDismiss: true })
        } else {

        }
        setState({ ...state, loading: true })
        uploadImages()
        console.log('SENDING ---', { ...props.state, files: state.files })
    }

    // React.useEffect(() => {

    // }, [state.loading])

    // console.log('LOCAL STATE ---', theState);
    // console.log('REDX AUTH ---', auth)

    React.useEffect(() => {
        console.log('%c Folder Name Don Change', "color:red")
        setFolderName(uuidv4() + `@${new Date().toJSON()}`)
    },[])

    return (
        <div className=''>
            <Modal show={state.loading} onHide={() => { }}>
                <Modal.Body className='text-center mt-4 mb-4'>
                    <Spinner size={20} color='green' />
                    <h5>{state.progress}% Uploading...</h5>
                </Modal.Body>
            </Modal>
            <div className=''>
                {/* {state.files.map((val, i) => {
                    return <>
                        <tr className='border m-0 d-flex justify-content-between p-1' key={i}>
                            <td><CardImg src={URL.createObjectURL(val)} responsive style={{ height: '90px', width: '90px' }} /></td>
                            <td><span onClick={() => removeFile(val)} className='btn-danger btn mt-4'>Remove</span></td>
                        </tr>
                    </>
                })} */}
                <ImageFilePreview files={state.files} removeFile={removeFile} />

            </div>
            <h1>{folderName}</h1>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="form-group br">
                    <div className="dropzone dz-clickable">
                        <div className="dz-default dz-message">
                            <i className="ti-gallery"></i>
                            {
                                isDragActive ?
                                    <span>Drag &amp; Drop </span> :
                                    <p>Click to select files</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleSubmit} className='btn btn-success fixed-right'>Submit Property</button>
        </div>
    )
})


export default SubmitImage;