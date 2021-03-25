import React from 'react'
import { connect } from 'react-redux'

export const PerpertyForm = (props) => {
    return (
        <form data-toggle="validator" novalidate="true">

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputName" className="control-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Cina Saffary" required="" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputEmail" className="control-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required="" />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputphone" className="control-label">Contact</label>
                        <input type="text" className="form-control" id="inputphone" placeholder="Contact No." required="" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputSubject" className="control-label">Subject</label>
                        <input type="text" className="form-control" id="inputSubject" placeholder="Subject" required="" />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputAddress" className="control-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Street No." required="" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputState" className="control-label">State</label>
                        <input type="text" className="form-control" id="inputState" placeholder="State" required="" />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputCity" className="control-label">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="City" required="" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputZip" className="control-label">Zip Code</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" required="" />
                        <div className="help-block with-errors" ></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputPassword" className="control-label">Password</label>
                        <input type="password" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required="" />
                        <div className="help-block">Minimum of 6 characters</div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputPassword" className="control-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required="" />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="radio">
                            <label>
                                <input type="radio" name="underwear" required="" />
                                                                                        Boxers
												</label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="underwear" required="" />
                                                                                            Briefs
												</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" id="terms" data-error="Before you wreck yourself" required="" />
                                                                                                Check yourself
												</label>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-12">
                <div className="form-group">
                    <div className="text-center">
                        <button type="submit" className="theme-bg w-100 btn gredient-btn">Send Request</button>
                        <button onClick={toggle} type="submit" className="mt-4 btn gredient-btn">Cancel</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PerpertyForm)
