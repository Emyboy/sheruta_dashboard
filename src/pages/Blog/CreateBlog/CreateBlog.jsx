import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { HeaderNav } from '../../../components/Layout'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDropzone } from 'react-dropzone'
import Select from 'react-select';
import axios from 'axios';
import Editor from '../../../components/Editor/Editor';
import ImageFilePreview from '../../../components/ImageFilePreview/ImageFilePreview';

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
                console.log('CAT --', res.data);
                setState({
                    ...state,
                    categories: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div>
            <HeaderNav title='Create Blog Post' subTitle='Create an amazing blog post down bellow' />
            <div className='container' style={{ marginTop: '5%' }}>
                <form>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Title</label>
                        <input type="text" className="form-control pt-4 pb-4 h1" id="inputName" placeholder="Blog Title" required style={{ fontSize: '25px' }} />
                    </div>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Description</label>
                        <textarea rows='6' type="text" className="form-control pt-4 pb-4 h1" id="inputName" placeholder="Blog Description" required />
                    </div>
                    <div className="form-group">
                        <label for="inputName" className="control-label">Category</label>
                        <Select
                            options={state.categories.map(val => {
                                return { value: val.id, label: val.name }
                            })}
                            onChange={e => setState({ ...data, blog_categorie: e })}
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

                    />
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="button" className="btn waves-effect waves-light btn-rounded btn-success m-4 w-50">Create Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
