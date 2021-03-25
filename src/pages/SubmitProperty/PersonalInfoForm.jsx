import React from 'react'
import { connect } from 'react-redux'
import SubmitHeading from './SubmitHeading'

export const PersonalInfoForm = (props) => {

    const goBack = () => {
        props.setState({ 
            ...props.state,
            display: 'categories'
        })
    }

    return (
        <form data-toggle="validator" className="padd-20 animated fadeIn" novalidate="true">
            {/* <div className="text-center mt-3 mb-3">
                <h3>Personal Info</h3>
            </div> */}
            <SubmitHeading goBack={goBack} title={'Personal Infomation'} />
            <hr />

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputName" className="control-label">Occupation <span className='text-danger'>(Required)</span></label>
                        <input name='occupation' type="text" className="form-control" id="occupation" placeholder="Ex. Doctor / Accountant" required />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputEmail" className="control-label">Company Name <span className='text-danger'>(Required)</span></label>
                        <input name='company_name' type="text" className="form-control" id="inputEmail" placeholder="Company Name" data-error="Bruh, that email address is invalid" required />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputName" className="control-label">Supervisor Name <span className='text-danger'>(Required)</span></label>
                        <input name='supervisor_name' type="text" className="form-control" id="occupation" placeholder="Ex. Mr. John Doe" required />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputEmail" className="control-label">Supervisor Number <span className='text-danger'>(Required)</span></label>
                        <input name='supervisor_number' type="number" className="form-control" id="inputEmail" placeholder="Ex. 08012345678" data-error="Bruh, that email address is invalid" required />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputEmail" className="control-label">Gender <span className='text-danger'>(Required)</span></label>
                        <input name='supervisor_number' type="number" className="form-control" id="inputEmail" placeholder="Ex. 08012345678" data-error="Bruh, that email address is invalid" required />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>


                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputName" className="control-label">Marital Status <span className='text-danger'>(Required)</span></label>
                        <input name='religion' type="text" className="form-control" id="religion" placeholder="Ex. Christien / Islamic" required />
                    </div>
                </div>
            </div>

            <div className="row mrg-0">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputName" className="control-label">Religion</label>
                        <input name='religion' type="text" className="form-control" id="religion" placeholder="Ex. Christien / Islamic" required />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label for="inputEmail" className="control-label">Active Phone Number <span className='text-danger'>(Required)</span></label>
                        <input name='phone_number' type="number" className="form-control" id="inputEmail" placeholder="Ex. 08012345678" data-error="Bruh, that email address is invalid" required />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

            </div>


            <hr />
            <div className="col-12">
                <div className="form-group">
                    <div className="d-flex justify-content-between">
                        <button className='btn btn-primary'>Save To Profile<i className='fa fa-save ml-2'></i></button>
                        <button onClick={() => {
                            props.setState({
                                ...props.state,
                                display: 'form'
                            })
                        }} className="btn gredient-btn btn-success">Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm)
