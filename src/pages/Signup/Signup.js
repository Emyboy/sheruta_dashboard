import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Spinner } from 'react-activity'

const Loading = () => {
    return <div className='text-center col-12 col-sm-12 col-md-6 col-lg-6' style={{ paddingTop: '40vh' }}>
        <Spinner color={window.themeColor} />
        <h6>Just A Moment..</h6>
    </div>
}

const Error = ({ message }) => {
    return <div className='text-center col-12 col-sm-12 col-md-6 col-lg-6' style={{ paddingTop: '40vh' }}>
        <div className="alert alert-danger">
            {message}
            <a href="https://sheruta.ng/signup" class="alert-link">Signup</a>.
								</div>
    </div>
}

const SignupForm = (status) => {
    useEffect(() => {
        console.log('STATUS ---', status);
    }, [status])
    switch (status) {
        case 'loading':
            return <Loading />
        case 'login':
            return <Redirect to='/login' />
        // case 'signup':
        //     return 
        default:
            return <div className="col-12 col-sm-12 col-md-6 col-lg-6 login-sidebar animated fadeInRightBig">

                <div className="login-container animated fadeInRightBig">

                    <h2 className="text-center text-upper">Signup</h2>
                    <form className="form-horizontal">

                        <div className="form-group">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Full Name" />
                            <i className="fa fa-user"></i>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email or Username" />
                            <i className="fa fa-user"></i>
                        </div>

                        <div className="form-group help">
                            <input type="password" className="form-control" placeholder="Password" />
                            <i className="fa fa-lock"></i>
                            <a href="#" className="pass-view fa fa-eye"></a>
                        </div>

                        <div className="form-group help">
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                            <i className="fa fa-lock"></i>
                        </div>

                        <div className="form-group">
                            <div className="flexbox align-items-center">
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                    <label for="checkbox1">Remember me</label>
                                </span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="flexbox align-items-center">
                                <button type="submit" className="btn theme-bg">Signup</button>
                                <p>Already Have An Account <Link to="/login" data-toggle="tooltip" className="theme-cl" data-original-title="Login">Log In Here.</Link></p>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
    }
}

export default function Signup(props) {

    const [state, setState] = useState({
        status: 'loading',
        message: null
    });


    useEffect(() => {
        document.querySelector('body').classList.remove('fixed-nav')
        document.querySelector('body').classList.remove('sticky-footer');
        const data = jwt.decode(props.match.params.token)

        axios(process.env.REACT_APP_API_URL + '/users/' + data.id, {
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
                        setState({ status: 'signup' })
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

    const Page = () => {
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
                <SignupForm status={state.status} />
            </div>
        </div>
    }

    switch (state.status) {
        case 'login':
            return <Redirect to='/login' />
        case 'error':
            return <Error message={state.message} />
        case 'loading':
            return <Page />
        default:
            return <Page />
    }
}
