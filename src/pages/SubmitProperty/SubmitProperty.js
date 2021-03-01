import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HeaderNav } from '../../components/Layout'
import Categories from './Categories'
import { SubmitForm } from './SubmitForm'

export const SubmitProperty = (props) => {
    const [state, setState] = useState({
        display: 'categories',
        category: null
    })

    const handleFirstNext = () => {
        if (state.category) {
            console.log(state)
            if (state.category.requires_personal_info) {
                setState({
                    display: 'personal_info'
                })
            } else {
                setState({
                    display: 'form'
                })
            }
        }
    }

    return (
        <div style={{ background: '#f2f7fb' }}>
            <HeaderNav title='Submit Property' subTitle='Add new property to your collection' />
            <div className='container mt-5'>
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="card animated flipInX">

                            <div className="card-body">
                                <div className="col-md-12 col-sm-12">
                                    <div className="stepwizard">

                                        <div className="stepwizard-row setup-panel">
                                            <div className="form-wizard-setup first">
                                                <a href="#step-1" className="btn circle-button btn-default active-wizard"><i className="fa fa-circle"></i></a>
                                                <p>Type</p>
                                            </div>

                                            <div className="form-wizard-setup">
                                                <a href="#step-2" className="btn btn-default circle-button"><i className="fa fa-user"></i></a>
                                                <p>Shipping Address</p>
                                            </div>

                                            <div className="form-wizard-setup">
                                                <a href="#step-3" className="btn btn-default circle-button"><i className="fa fa-cc-visa"></i></a>
                                                <p>Secure Payment</p>
                                            </div>

                                            <div className="form-wizard-setup last">
                                                <a href="#step-4" className="btn btn-default circle-button"><i className="fa fa-check-square-o"></i></a>
                                                <p>Complete</p>
                                            </div>

                                        </div>
                                    </div>

                                    <form>
                                        {state.display === 'categories' ?
                                            <Categories
                                                state={state}
                                                setState={setState}
                                                handleFirstNext={handleFirstNext}
                                            /> : null
                                        }
                                        {state.display === 'personal_info' ?
                                            <h1>personal info</h1> : null
                                        }
                                        {state.display === 'form' ?
                                            <SubmitForm
                                                state={state}
                                                setState={setState}
                                            /> : null
                                        }

                                        <div className="row setup-content" id="step-3" style={{ display: "none" }}>
                                            <div className="col-md-12">
                                                <div className="panel-body">

                                                    <div className="form-group">
                                                        <div className="col-md-12"><label className="form-label">Card Type:</label></div>
                                                        <div className="col-md-12">
                                                            <select id="CreditCardType" name="CreditCardType" className="form-control">
                                                                <option value="5">Visa</option>
                                                                <option value="6">MasterCard</option>
                                                                <option value="7">American Express</option>
                                                                <option value="8">Discover</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12"><label className="form-label">Credit Card Number:</label></div>
                                                        <div className="col-md-12"><input type="text" className="form-control" required="required" name="car_number" /></div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12"><label className="form-label">Card CVV:</label></div>
                                                        <div className="col-md-12"><input type="text" className="form-control" required="required" name="car_code" /></div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Expiration Date</label>
                                                        </div>
                                                        <div className="row mrg-0">
                                                            <div className="col-lg-6 col-md-6">
                                                                <select className="form-control">
                                                                    <option>Month</option>
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option>
                                                                    <option value="03">03</option>
                                                                    <option value="04">04</option>
                                                                    <option value="05">05</option>
                                                                    <option value="06">06</option>
                                                                    <option value="07">07</option>
                                                                    <option value="08">08</option>
                                                                    <option value="09">09</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <select className="form-control">
                                                                    <option>Year</option>
                                                                    <option value="2015">2015</option>
                                                                    <option value="2016">2016</option>
                                                                    <option value="2017">2017</option>
                                                                    <option value="2018">2018</option>
                                                                    <option value="2019">2019</option>
                                                                    <option value="2020">2020</option>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <span>Pay secure using your credit card.</span>
                                                            <img src="http://via.placeholder.com/200x40" className="img-responsive" alt="" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                                            </div>
                                        </div>

                                        <div className="row setup-content" id="step-4" style={{ display: "none" }}>
                                            <div className="col-md-12">
                                                <div className="complete-payment">
                                                    <div className="text-center">
                                                        <img src="http://via.placeholder.com/128x128" className="img-responsive" alt="" />
                                                        <h2>Thanks for Your Order</h2>
                                                        <p>Your order has been placed successfully.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitProperty)
