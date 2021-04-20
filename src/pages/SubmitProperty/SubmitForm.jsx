import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SubmitHeading from './SubmitHeading'
import Creatable, { makeCreatableSelect } from 'react-select/creatable'
import Select from 'react-select'
import { MultiSelect } from 'primereact/multiselect';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import store from '../../redux/store/store'

export const SubmitForm = (props) => {
    const [state, setState] = useState({
        amenities: [],
        status: []
    })

    const getAllAmenities = () => {
        axios(process.env.REACT_APP_API_URL + '/amenities')
            .then(res => {
                console.log(res)
                setState({ ...state, amenities: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getAllStatus = () => {
        axios(process.env.REACT_APP_API_URL + '/status')
            .then(res => {
                console.log(res)
                setState({ ...state, status: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        if (state.amenities.length === 0) {
            getAllAmenities();
        }
    }, [state.amenities]);
    useEffect(() => {
        if (state.status.length === 0) {
            getAllStatus();
        }
    }, [state.status]);

    const { data } = props;


    return (
        <div className='mt-4'>
            {
                !data ? <SubmitHeading goBack={() => {
                    props.setState({
                        ...props.state,
                        display: 'categories'
                    })
                }} title='Property Information' /> : null
            }
            <div className="row setup-content animated fadeIn" id="step-2">
                <div className="col-md-12">
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Title:</label></div>
                            <div className="col-md-12">
                                <input defaultValue={data ? data.name : null} type="text" className="form-control" name="title" required="required" onChange={e => props.setState({ ...props.state, name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row mrg-0">
                                <div className="col-sm-6">
                                    <label className="form-label">Bedroom</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, bedroom: e.target.value })}>
                                        <option selected={data ? data.bedroom === 0 : false}>0</option>
                                        <option selected={data ? data.bedroom === 1 : false}>1</option>
                                        <option selected={data ? data.bedroom === 2 : false}>2</option>
                                        <option selected={data ? data.bedroom === 3 : false}>3</option>
                                        <option selected={data ? data.bedroom === 4 : false}>4</option>
                                        <option selected={data ? data.bedroom === 5 : false}>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Sittingroom</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, sittingroom: e.target.value })}>
                                        <option selected={data ? data.sittingroom === 0 : false}>0</option>
                                        <option selected={data ? data.sittingroom === 1 : false}>1</option>
                                        <option selected={data ? data.sittingroom === 2 : false}>2</option>
                                        <option selected={data ? data.sittingroom === 3 : false}>3</option>
                                        <option selected={data ? data.sittingroom === 4 : false}>4</option>
                                        <option selected={data ? data.sittingroom === 5 : false}>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Toilets</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, toilet: e.target.value })}>
                                        <option selected={data ? data.toilet === 0 : false}>0</option>
                                        <option selected={data ? data.toilet === 1 : false}>1</option>
                                        <option selected={data ? data.toilet === 2 : false}>2</option>
                                        <option selected={data ? data.toilet === 3 : false}>3</option>
                                        <option selected={data ? data.toilet === 4 : false}>4</option>
                                        <option selected={data ? data.toilet === 5 : false}>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="inputName" className="control-label">Location</label>
                                        <GooglePlacesAutocomplete
                                            apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
                                            apiOptions={{ language: 'en', region: 'ng' }}
                                            selectProps={{
                                                // props.state.location,
                                                onChange: e => {
                                                    console.log(e)
                                                    props.setState({ ...props.state, google_location: e, location: e.label })
                                                },
                                                placeholder:
                                                    'Start typing your address',
                                            }}
                                            autocompletionRequest={{
                                                componentRestrictions: {
                                                    country: ['ng'],
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row mrg-0">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="inputEmail" className="control-label">Price</label>
                                        <input defaultValue={data ? data.price : null} type="number" className="form-control" id="inputEmail" placeholder="Price" data-error="Bruh, that email address is invalid" required="" onChange={e => props.setState({ ...props.state, price: e.target.value })} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="inputEmail" className="control-label">Status</label>
                                        <Select
                                            options={state.status.map(val => ({ value: val.id, label: val.name.toUpperCase() }))}
                                            onChange={e => setState({ ...state, status: e })}
                                            value={state.status}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className="form-group">
                            <div className="col-sm-12">
                                <label for="inputName" className="control-label">Amenities</label>
                                <Select
                                    onChange={e => setState({ ...state, amenities: e })}
                                    value={props.state.amenities}
                                    options={state.amenities.map(val => ({ value: val.id, label: val.name.toUpperCase() }))}
                                    isMulti
                                />
                            </div>

                        </div>

                        <div className="col-sm-12">
                            <div className="form-group">
                                <label for="inputEmail" className="control-label">Tell Us About This Property</label>
                                <textarea defaultValue={data ? data.description : null} rows='5' className="form-control" onChange={e => props.setState({ ...props.state, description: e.target.value })} required={true} />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    {
                        data ? <button className='btn btn-success nextBtn btn-lg pull-right'>Save</button> :
                            <button onClick={() => {
                                props.setState({
                                    ...props.state,
                                    display: 'image'
                                })
                            }} className="btn btn-success nextBtn btn-lg pull-right" type="button">Next</button>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    view: state.view
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)
