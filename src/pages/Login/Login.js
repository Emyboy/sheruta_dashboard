import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    useEffect(() => {
        document.querySelector('body').classList.remove('fixed-nav')
        document.querySelector('body').classList.remove('sticky-footer')
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">


                <div className="hidden-xs hidden-sm col-lg-6 col-md-6 theme-bg animated fadeInLeftBig" style={{ height: '100vh' }}>
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
                        <form className="form-horizontal">

                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email or Username" />
                                <i className="fa fa-user"></i>
                            </div>

                            <div className="form-group help">
                                <input type="password" className="form-control" placeholder="Password" />
                                <i className="fa fa-lock"></i>
                                <a href="#" className="pass-view fa fa-eye"></a>
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
                                    <button type="submit" className="btn theme-bg">log in</button>
                                    <p>Are you new? <Link to="/signup" data-toggle="tooltip" className="theme-cl" data-original-title="Signup">Signup Here.</Link></p>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>




            </div>
        </div>
    )
}
