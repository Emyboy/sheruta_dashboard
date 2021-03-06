import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { HeaderNav } from '../../../components/Layout'
import { useDropzone } from 'react-dropzone'
import Select from 'react-select';
import axios from 'axios';
import Editor from '../../../components/Editor/Editor';
import ImageFilePreview from '../../../components/ImageFilePreview/ImageFilePreview';
import { v4 as uuid } from 'uuid'
import { storage } from '../../../Firebase';
import store from '../../../redux/store/store';

const CreateBlog = (props) => {
    const [state, setState] = useState({
        loading: false,
        createLoading: false,
        categories: [],
        image_files: []
    });
    const [data, setData] = useState({
        title: null,
        body_html: null,
        body_text: null,
        uuid: null,
        image_url: null,
        description: null,
        blog_categorie: null

    });

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // console.log('SELECTED FILE', acceptedFiles);
        // setData({ ...data, image_files: acceptedFiles})
        state.image_files.push(acceptedFiles[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const getAllCategories = () => {
        axios(process.env.REACT_APP_API_URL + '/blog-categories')
            .then(res => {
                setState({
                    ...state,
                    categories: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    const sendToDb = () => {
        axios(process.env.REACT_APP_API_URL + '/blogs', {
            method: 'POST',
            headers: {
                Authorization:
                    `Bearer ${store.getState().auth.jwt}`,
            },
            data
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const uploadImage = e => {
        e.preventDefault();
        setState({ ...state, createLoading: true });

        var uploadTask = storage.ref().child(`image/blog/${props.auth.agent.id}/${uuid}`).put(state.image_files[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                // switch (snapshot.state) {
                //     case firebase.storage.TaskState.PAUSED: // or 'paused'
                //         console.log('Upload is paused');
                //         break;
                //     case firebase.storage.TaskState.RUNNING: // or 'running'
                //         console.log('Upload is running');
                //         break;
                // }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log('ERROR --', {...error})
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );

    }

    useEffect(() => {
        getAllCategories();
    }, [])

    useEffect(() => {
        console.log('DATA ---', data, state)
    }, [data, state])

    return (
        <div>
            <HeaderNav title='Create Blog Post' subTitle='Create an amazing blog post down bellow' />
            <div className='container' style={{ marginTop: '5%' }}>
                <form onSubmit={uploadImage}>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Title</label>
                        <input
                            type="text"
                            className="form-control pt-4 pb-4 h1"
                            placeholder="Blog Title"
                            required style={{ fontSize: '25px' }}
                            onChange={e => setData({ ...data, title: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Description</label>
                        <textarea rows='6' type="text" className="form-control pt-4 pb-4 h1"
                            placeholder="Blog Description" required
                            onChange={e => setData({ ...data, description: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Category</label>
                        <Select
                            options={state.categories.map(val => {
                                return { value: val.id, label: val.name }
                            })}
                            onChange={e => setData({ ...data, blog_categorie: e })}
                            value={data.blog_categorie}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Image</label>
                        {
                            state.image_files.length > 0 ?
                                <ImageFilePreview
                                    files={state.image_files}
                                    removeFile={() => { }}
                                /> : <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="form-group br bg-white border">
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
                        }
                    </div>
                    <label for="inputName" className="control-label">Content</label>
                    <Editor
                        onChange={(e, t) => {
                            // console.log(e, t)
                            setData({ ...data, body_html: e, body_text: t.replace('&nbsp;', " ") })
                        }}
                    />
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" className="btn waves-effect waves-light btn-rounded btn-success m-4 w-50">Create Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
