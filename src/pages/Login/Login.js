import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Spinner } from 'react-activity';
import { connect } from 'react-redux';
import store from '../../redux/store/store';
import { loginAgent } from '../../redux/actions/auth.action';

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    loginAgent
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(props => {

    const [state, setState] = useState({
        loading: false
    })

    const [data, setData] = useState({
        password: null,
        identifier: null
    });

    const loginUser = e => {
        e.preventDefault();
        props.loginAgent(data)
    }

    useEffect(() => {
        document.querySelector('body').classList.remove('fixed-nav')
        document.querySelector('body').classList.remove('sticky-footer')
    }, [])


    if (!props.auth.agent) {
        return (
            <div className="container-fluid">
                <div className="row">


                    <div className="hidden-xs hidden-sm col-lg-6 col-md-6 theme-bg animated" style={{ height: '100vh' }}>
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



                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 login-sidebar animated fadeInRightBig">

                        <div className="login-container animated fadeInRightBig">

                            <h2 className="text-center text-upper">Login</h2>
                            {props.auth.error ? <div className="alert alert-danger">
                                {props.auth.error}
                            </div> : null}
                            <form className="form-horizontal" onSubmit={loginUser}>

                                <div className="form-group">
                                    <input name='email' disabled={props.auth.loading} onChange={e => setData({ ...data, identifier: e.target.value })} type="email" className="form-control" placeholder="Email Address" 
                                    required 
                                    data-testid='email-input'
                                    />
                                    <i className="fa fa-user"></i>
                                </div>

                                <div className="form-group help">
                                    <input name='password' disabled={props.auth.loading} onChange={e => setData({ ...data, password: e.target.value })} type="password" className="form-control" placeholder="Password" required
                                    data-testid='password-input'
                                     />
                                    <i className="fa fa-lock"></i>
                                    <a href="#" className="pass-view fa fa-eye"></a>
                                </div>

                                {/* <div className="form-group">
                                <div className="flexbox align-items-center">
                                    <span className="custom-checkbox">
                                        <input disabled={props.auth.loading} onChange={e => setData({ ...data, })} type="checkbox" id="checkbox1" name="options[]" value="1" />
                                        <label for="checkbox1">Remember me</label>
                                    </span>
                                </div>
                            </div> */}

                                <div className="form-group">
                                    <div className="flexbox align-items-center">
                                        <button data-testid='login-btn' disabled={props.auth.loading} type="submit" className="btn theme-bg">{state.loading ? <Spinner color='white' /> : 'log in'}</button>
                                        <p>Are you new? <Link to="/signup" data-toggle="tooltip" className="theme-cl" data-original-title="Signup">Signup Here.</Link></p>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>




                </div>
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
});
