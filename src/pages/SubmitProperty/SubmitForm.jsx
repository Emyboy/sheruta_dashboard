import React from 'react'
import { connect } from 'react-redux'
import SubmitHeading from './SubmitHeading'

export const SubmitForm = (props) => {
    return (
        <div className='mt-4'>
            <SubmitHeading goBack={() => {
                props.setState({
                    display: 'personal_info'
                })
            }} title='Property Information' />
            <div className="row setup-content animated fadeIn" id="step-2">
                <div className="col-md-12">
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Title:</label></div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="title" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row mrg-0">
                                <div className="col-md-4 col-6">
                                    <label className="form-label">Bedroom</label>
                                    <select class="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-6">
                                    <label className="form-label">Sittingroom</label>
                                    <select class="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-6">
                                    <label className="form-label">Bathroom</label>
                                    <select class="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                {/* <div className="span1">yo</div>
                            <div className="col-md-6 col-12">
                                <label className="form-label">Last Name:</label>
                                <input type="text" name="last_name" className="form-control" required="required" />
                            </div> */}
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Address:</label></div>
                            <div className="col-md-12">
                                <input type="text" name="address" className="form-control" required="required" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">City:</label></div>
                            <div className="col-md-12">
                                <input type="text" name="city" className="form-control" required="required" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">State:</label></div>
                            <div className="col-md-12">
                                <input type="text" name="state" className="form-control" required="required" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Zip / Postal Code:</label></div>
                            <div className="col-md-12">
                                <input type="text" name="zip_code" className="form-control" required="required" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Phone Number:</label></div>
                            <div className="col-md-12"><input type="text" name="phone_number" className="form-control" required="required" /></div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Email Address:</label></div>
                            <div className="col-md-12"><input type="text" name="email_address" className="form-control" required="required" /></div>
                        </div>

                    </div>
                    <button onClick={() => {
                        props.setState({
                            display: 'image'
                        })
                    }} className="btn btn-success nextBtn btn-lg pull-right" type="button">Next</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)
