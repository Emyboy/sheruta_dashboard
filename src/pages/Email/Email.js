import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import Editor from '../../components/Editor/Editor'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications';

const Email = (props) => {
    const { addToast } = useToasts();
    const [state, setState] = useState({
        loading: false
    });

    const [data, setData] = useState({
        body: null,
        heading: null,
        actionText: null,
        actionURL: null
    });

    useEffect(() => {
        console.log(data)
    });

    const handleSubmit = e => {
        e.preventDefault();
        setState({ ...state, loading: true });
        axios(process.env.REACT_APP_API_URL + '/sheruta/send/email', {
            method: 'POST',
            data,
            headers: {
                Authorization:
                    `Bearer ${JSON.parse(localStorage.getItem('state')).auth.jwt}`,
            },
        })
            .then(res => {
                setState({ ...state, loading: false });
                console.log(res);
                addToast('Email has been sent', { appearance: 'success', autoDismiss: true });
                setData({ ...data, actionText: null, actionURL: null, body: '', heading: null })
            })
            .catch(err => {
                setState({ ...state, loading: false });
                console.log(err)
            })
    }

    return (
        <Layout
            currentPage='email'
        >
            <div className='container'>
                <div className="text-center">
                    <h5>Email Every User</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Heading</label>
                        <input required type="text" className="form-control" id="inputEmailHeading" placeholder="Email Heading" onChange={e => setData({ ...data, heading: e.target.value })} defaultValue={data.heading} />
                    </div>
                    <div className="form-group">
                        <label>Action Text</label>
                        <input  type="text" className="form-control" id="inputEmail3" placeholder="Action text" onChange={e => setData({ ...data, actionText: e.target.value })} defaultValue={data.actionText} />
                    </div>
                    <div className="form-group">
                        <label>Action URL</label>
                        <input type="text" className="form-control" id="inputEmail3" placeholder="Action URL" onChange={e => setData({ ...data, actionURL: e.target.value })} defaultValue={data.actionURL} />
                    </div>
                    <Editor
                        onChange={e => setData({ ...data, body: e })}
                        data={data.body}
                    />
                    <button type="submit" disabled={state.loading} className="btn mrg-0 btn-danger btn-block btn-sm mt-3">
                        {state.loading ? "Loading" : 'Send'}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Email)
