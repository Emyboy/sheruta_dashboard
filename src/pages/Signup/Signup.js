import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Spinner } from 'react-activity';
import store from '../../redux/store/store';
import { connect } from 'react-redux';

const Loading = () => {
    return <div className='text-center col-12 col-sm-12 col-md-6 col-lg-6' style={{ paddingTop: '40vh' }}>
        <Spinner color={window.themeColor} />
        <h6>Just A Moment..</h6>
    </div>
}

const Error = ({ message }) => {
    return <div className='text-center col-12 col-sm-12 col-md-6 col-lg-6' style={{ paddingTop: '40vh' }}>
        <div className="alert alert-danger">
            {message} or {' '}
            <a href="https://sheruta.ng/signup" className="alert-link">Signup</a>.
								</div>
    </div>
}

const mapStateToPrpos = state => ({
    auth: state.auth
})

export default connect(
    mapStateToPrpos
)(props => {
    const JWT = jwt.decode(props.match.params.token)
    const [state, setState] = useState({
        status: 'loading',
        message: null,
        userData: null,
        loading: false,
        error: null
    });

    const [data, setData] = useState({
        name: null,
        location: null,
        phone_number: null,
        users_permissions_user: null
    })

    const createAgentAccount = () => {
        setState({ ...state, loading: true })
        console.log('sending --', data)
        axios(process.env.REACT_APP_API_URL + '/agents', {
            method: 'POST',
            headers: {
                Authorization:
                    `Bearer ${props.match.params.token}`,
            },
            data: {
                ...data,
                // phone_number: state.userData.phone_number,
                // users_permissions_user: state.userData.id
            }
        })
            .then(res => {
                store.dispatch({
                    type: 'SET_AUTH_STATE',
                    payload: {
                        jwt: props.match.params.token
                    }
                })
                setState({ ...state, loading: false, status: 'login', userData: res.data })
                console.log(res)
            })
            .catch(err => {
                setState({ ...state, loading: false, error: 'Something went wrong please try again' })
                console.log(err)
            })
    }


    useEffect(() => {
        document.querySelector('body').classList.remove('fixed-nav')
        document.querySelector('body').classList.remove('sticky-footer');

        axios(process.env.REACT_APP_API_URL + '/users/' + JWT.id, {
            method: 'GET',
            headers: {
                Authorization:
                    `Bearer ${props.match.params.token}`,
            },
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    if (res.data.agent) {
                        setState({ status: 'login' })
                    } else {
                        setState({ status: 'signup', userData: res.data });
                        setData({
                            ...data,
                            phone_number: res.data.phone_number,
                            users_permissions_user: res.data.id
                        })
                    }
                }
            })
            .catch(err => {
                setState({
                    status: 'error',
                    message: 'Something went wrong please try again'
                })
                // console.log(err)
            })
    }, [])

    if (state.status !== 'login') {
        return <div className="container-fluid">
            <div className="row">
                <div className="hidden-xs hidden-sm col-lg-6 col-md-6 theme-bg" style={{ height: '100vh' }}>
                    <div className="clearfix">
                        <div className="logo-title-container text-center">
                            <h5 className="cl-white text-upper">Welcome To</h5>
                            {/* <img className="img-responsive" src="assets/dist/img/logo.png" alt="Logo Icon" /> */}
                            <h1 className='text-white'><b>Sheruta NG</b></h1>
                            <div className="copy animated fadeIn">
                                <p className="cl-white">Find Your Happy Place.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {state.status === 'loading' ? <Loading /> : null}
                {state.status === 'error' ? <Error message={state.message} /> : null}

                {
                    state.status === 'signup' ? <div className="col-12 col-sm-12 col-md-6 col-lg-6 login-sidebar animated fadeInRightBig">

                        <div className="login-container animated fadeInRightBig">

                            <h2 className="text-center text-upper">Signup</h2>
                            {state.error ? <div class="alert alert-danger">
                                {state.error}
                            </div> : null}
                            <form className="form-horizontal">

                                <div className="form-group">
                                    <input disabled defaultValue={state.userData.email} name='name' type="email" className="form-control" id="inputEmail3" placeholder="Company Name" />
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="form-group">
                                    <input disabled={state.loading} onChange={e => setData({ ...data, name: e.target.value })} name='name' type="text" className="form-control" id="inputEmail3" placeholder="Company Name" />
                                    <i className="fa fa-user"></i>
                                </div>

                                <div className="form-group">
                                    <input disabled={state.loading} onChange={e => setData({ ...data, location: e.target.value })} name='location' type="text" className="form-control" placeholder="Location" />
                                    <i className="fa fa-map"></i>
                                </div>

                                <div className="form-group help">
                                    <input disabled={state.loading} onChange={e => setData({ ...data, phone_number: e.target.value })} name='phone_number' defaultValue={state.userData.phone_number} type="text" className="form-control" placeholder="Phone Number" />
                                    <i className="fa fa-phone"></i>
                                    {/* <a href="#" className="pass-view fa fa-eye"></a> */}
                                </div>

                                {/* <div className="form-group">
                                <div className="flexbox align-items-center">
                                    <span className="custom-checkbox">
                                        <input disabled={state.loading} onChange={e => setData({...data, })} type="checkbox" id="checkbox1" name="options[]" value="1" />
                                        <label for="checkbox1">Remember me</label>
                                    </span>
                                </div>
                            </div> */}

                                <div className="form-group">
                                    <div className="flexbox align-items-center">
                                        <button onClick={createAgentAccount} disabled={state.loading} type="submit" className="btn theme-bg">{state.loading ? <Spinner color='white' /> : 'Create Account'}</button>
                                        <p>Already Have An Account <Link to="/login" data-toggle="tooltip" className="theme-cl" data-original-title="Login">Log In Here.</Link></p>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div> : null
                }


            </div>
        </div>
    } else {
        if (props.auth) {
            return <Redirect to='/' />
        } else
            return <Redirect to='/login' />
    }
});
