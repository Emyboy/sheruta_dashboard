import React, { useEffect } from 'react'

export default function Login() {
    useEffect(() => {
        document.querySelector('body').classList.remove('fixed-nav')
        document.querySelector('body').classList.remove('sticky-footer')
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">


                <div class="hidden-xs hidden-sm col-lg-6 col-md-6 theme-bg" style={{ height: '100vh' }}>
                    <div class="clearfix">
                        <div class="logo-title-container text-center">
                            <h5 class="cl-white text-upper">Welcome To</h5>
                            {/* <img class="img-responsive" src="assets/dist/img/logo.png" alt="Logo Icon" /> */}
                            <h1 className='text-white'><b>Sheruta NG</b></h1>
                            <div class="copy animated fadeIn">
                                <p class="cl-white">Find Your Happy Place.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-12 col-sm-12 col-md-6 col-lg-6 login-sidebar animated fadeInRightBig">

                    <div class="login-container animated fadeInRightBig">

                        <h2 class="text-center text-upper">Login</h2>
                        <form class="form-horizontal">

                            <div class="form-group">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Full Name" />
                                    <i class="fa fa-user"></i>
							</div>

                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email or Username" />
                                        <i class="fa fa-user"></i>
							</div>

                                    <div class="form-group help">
                                        <input type="password" class="form-control" placeholder="Password" />
                                            <i class="fa fa-lock"></i>
                                            <a href="#" class="pass-view fa fa-eye"></a>
							</div>

                                        <div class="form-group help">
                                            <input type="password" class="form-control" placeholder="Confirm Password" />
                                                <i class="fa fa-lock"></i>
							</div>

                                            <div class="form-group">
                                                <div class="flexbox align-items-center">
                                                    <span class="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                            <label for="checkbox1">Remember me</label>
									</span>
								</div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="flexbox align-items-center">
                                                        <button type="submit" class="btn theme-bg">log in</button>
                                                        <p>Already Have An Account <a href="login.html" data-toggle="tooltip" class="theme-cl" data-original-title="Login">Log In Here.</a></p>
                                                    </div>
                                                </div>
						
						</form>
                                        </div>

				</div>




            </div>
        </div>
    )
}
