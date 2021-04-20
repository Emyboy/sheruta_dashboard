import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {HeaderNav} from '../../components/Layout'
import Categories from './Categories'
import PersonalInfoForm from './PersonalInfoForm'
import SubmitForm from './SubmitForm'
import SubmitImage from './SubmitImage';
import { ProgressBar } from 'primereact/progressbar';
import { Modal } from 'react-bootstrap'
import ServicesForm from './ServicesForm'
import axios from 'axios'
import store from '../../redux/store/store'

export const SubmitProperty = (props) => {
    const [personalInfo, setPersonalInfo] = useState(false);
    const [state, setState] = useState({
        display: 'categories',
        category: null,
        amenities: [],
        name: null,
        bedroom: 0,
        bathroom: 0,
        sittingroom: 0,
        location: null,
        google_location: null,
        toilet: 0,
        price: null,
        description: null,
        statu: null,
        progress: "0",
        service: null,
        personal_info: null,
        amenities: [],
        status: []
    })

    const handleFirstNext = () => {
        if (state.service) {
            // console.log(state)
            if (state.service.requires_personal_info) {
                setPersonalInfo(true)
                // setState({
                //     ...state,
                //     display: 'personal_info'
                // })
            } else {
                setState({
                    ...state,
                    display: 'form'
                })
            }
        }
    }

    useEffect(() => {
        console.log('STATE --', state)
    }, [])



    return (
        <div style={{ background: '#f2f7fb' }}>
            <HeaderNav title='Submit Property' subTitle='Add new property to your collection' to='' />
            <Modal show={personalInfo} size='lg'>
                <Modal.Body>
                    <PersonalInfoForm
                        state={state}
                        setState={setState}
                        setPersonalInfo={setPersonalInfo}
                    />
                </Modal.Body>
            </Modal>
            <div className='container mt-5'>
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="card animated flipInX">

                            <div className="card-body">
                                <div className="col-md-12 col-sm-12">
                                    {/* <div className="stepwizard">

                                        {
                                            state.display !== 'loading' ? <div className="stepwizard-row setup-panel">
                                                <div className="form-wizard-setup first">
                                                    <a href="#step-1" className={`btn circle-button btn-default ${state.display === 'categories' ? 'active-wizard' : null}`}><i className="fa fa-circle"></i></a>
                                                </div>

                                                <div className="form-wizard-setup">
                                                    <a href="#step-2" className={`btn btn-default circle-button ${state.display === 'personal_info' ? 'active-wizard' : null}`}><i className="fa fa-user"></i></a>
                                                </div>

                                                <div className="form-wizard-setup">
                                                    <a href="#step-3" className={`btn btn-default circle-button ${state.display === 'form' ? 'active-wizard' : null}`}><i className="fa fa-table"></i></a>
                                                </div>

                                                <div className="form-wizard-setup last">
                                                    <a href="#step-4" className={`btn btn-default circle-button ${state.display === 'image' ? 'active-wizard' : null}`}><i className="fa fa-image"></i></a>
                                                </div>

                                            </div> : null
                                        }
                                    </div> */}

                                    <form>
                                        {state.display === 'categories' ?
                                            <Categories
                                                state={state}
                                                setState={setState}
                                                handleFirstNext={handleFirstNext}
                                            /> : null
                                        }
                                        {/* {state.display === 'personal_info' ?
                                            <PersonalInfoForm
                                                state={state}
                                                setState={setState}
                                            /> : null
                                        } */}
                                        {state.display === 'form' ?
                                            <SubmitForm
                                                state={state}
                                                setState={setState}
                                            /> : null
                                        }
                                        {state.display === 'services' ?
                                            <ServicesForm
                                                state={state}
                                                setState={setState}
                                                handleFirstNext={handleFirstNext}
                                            /> : null
                                        }
                                        {state.display === 'image' ?
                                            <SubmitImage
                                                state={state}
                                                setState={setState}
                                            /> : null
                                        }
                                        {
                                            state.display === 'loading' ?
                                                <div className="row setup-content" id="step-4">
                                                    <div className="col-md-12">
                                                        <div className="complete-payment">
                                                            <div className="text-center animated bounceInUp">
                                                                <img src="https://media2.giphy.com/media/RIBOU83EKnHyJadF9V/giphy.gif" style={{ width: '100px' }} className="img-responsive" alt="" />
                                                                <h2>Uploading..</h2>
                                                                <p>This may take some time</p>
                                                            </div>
                                                        </div>
                                                        <ProgressBar value={state.progress}></ProgressBar>
                                                    </div>
                                                </div> : null
                                        }
                                        {
                                            state.display === 'success' ?
                                                <div className="row setup-content" id="step-4">
                                                    <div className="col-md-12">
                                                        <div className="complete-payment">
                                                            <div className="text-center">
                                                                <img src="https://media1.giphy.com/media/l1J9NJRqBAp3iHaxO/giphy.gif" style={{ width: '200px' }} className="img-responsive" alt="" />

                                                                <h2>Uploaded successfully</h2>
                                                                <p>Your property has been uploaded successfully.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : null
                                        }
                                        {
                                            state.display === 'error' ?
                                                <div className="row setup-content" id="step-4">
                                                    <div className="col-md-12">
                                                        <div className="complete-payment">
                                                            <div className="text-center">
                                                                <img src="https://lh3.googleusercontent.com/proxy/F0YwYdX9lAJrfX7khFZPB7tdTyNQHLdK-_D9JRUey7b4fSAeHfRxC8mqrLEyJaVFxFXJPbpDCwzEUlUiq0ah_L2s3uwv_L0" style={{ width: '200px' }} className="img-responsive" alt="" />

                                                                <h2>Uploaded Faild</h2>
                                                                <p>Your property failed to upload.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : null
                                        }
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
