import React from 'react'
import Modal from '../Modal'

export default function AppPropertyModal(
    {
        show,
        toggle
    }
) {
    if (show) {
        return (
            <>
                <Modal show={show} toggle={toggle}>
                    <form data-toggle="validator" novalidate="true">

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputName" class="control-label">Name</label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Cina Saffary" required="" />
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputEmail" class="control-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required="" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputphone" class="control-label">Contact</label>
                                    <input type="text" class="form-control" id="inputphone" placeholder="Contact No." required="" />
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputSubject" class="control-label">Subject</label>
                                    <input type="text" class="form-control" id="inputSubject" placeholder="Subject" required="" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputAddress" class="control-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Street No." required="" />
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputState" class="control-label">State</label>
                                    <input type="text" class="form-control" id="inputState" placeholder="State" required="" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputCity" class="control-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="City" required="" />
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputZip" class="control-label">Zip Code</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="Zip Code" required="" />
                                        <div class="help-block with-errors" ></div>
                                </div>
                            </div>

                        </div>

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputPassword" class="control-label">Password</label>
                                    <input type="password" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required="" />
                                    <div class="help-block">Minimum of 6 characters</div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputPassword" class="control-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required="" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>

                        <div class="row mrg-0">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="underwear" required="" />
                                                                                        Boxers
												</label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="underwear" required="" />
                                                                                            Briefs
												</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="terms" data-error="Before you wreck yourself" required="" />
                                                                                                Check yourself
												</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <div class="text-center">
                                    <button type="submit" class="theme-bg w-100 btn gredient-btn">Send Request</button>
                                    <button onClick={toggle} type="submit" class="mt-4 btn gredient-btn">Cancel</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </Modal>
            </>
        )
    } else {
        return null
    }
}
