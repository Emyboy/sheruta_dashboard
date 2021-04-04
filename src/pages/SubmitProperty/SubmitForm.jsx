import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SubmitHeading from './SubmitHeading'
import Creatable, { makeCreatableSelect } from 'react-select/creatable'
import Select from 'react-select'
import { MultiSelect } from 'primereact/multiselect';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const SubmitForm = (props) => {
    const [state, setState] = useState({
        amenities: [],
        status: []
    })

    const getAllAmenities = () => {
        axios(process.env.REACT_APP_API_URL + '/amenities')
            .then(res => {
                console.log(res)
                setState({
                    ...state,
                    amenities: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getAllStatus = () => {
        axios(process.env.REACT_APP_API_URL + '/status')
            .then(res => {
                console.log(res)
                setState({
                    ...state,
                    status: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        props.setState({
            ...props.state,
            amenities: []
        })
        getAllAmenities()
        getAllStatus()
    }, []);

    return (
        <div className='mt-4'>
            <SubmitHeading goBack={() => {
                props.setState({
                    ...props.state,
                    display: 'personal_info'
                })
            }} title='Property Information' />
            <div className="row setup-content animated fadeIn" id="step-2">
                <div className="col-md-12">
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12"><label className="form-label">Title:</label></div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="title" required="required" onChange={e => props.setState({ ...props.state, name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row mrg-0">
                                <div className="col-sm-6">
                                    <label className="form-label">Bedroom</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, bedroom: e.target.value })}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Sittingroom</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, sittingroom: e.target.value })}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Toilets</label>
                                    <select className="form-control" id="exampleSelect1" onChange={e => props.setState({ ...props.state, toilet: e.target.value })}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="inputName" className="control-label">Location</label>
                                        <GooglePlacesAutocomplete
                                            apiKey={process.env.REACT_APP_PLACES_API_KEY}
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
                                        <input type="number" className="form-control" id="inputEmail" placeholder="Price" data-error="Bruh, that email address is invalid" required="" onChange={e => props.setState({ ...props.state, price: e.target.value })} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="inputEmail" className="control-label">Status</label>
                                        <Select
                                            options={state.status.map(val => ({ value: val.id, label: val.name.toUpperCase() }))}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className="form-group">
                            <div className="col-sm-6">
                                <label for="inputName" className="control-label">Amenities</label>
                                <MultiSelect value={props.state.amenities} options={state.amenities.map(val => ({ code: val.id, name: val.name }))} onChange={(e) => {
                                    props.setState({
                                        ...props.state,
                                        amenities: e.value
                                    })
                                    // console.log(e)
                                }} optionLabel="name" placeholder="Select Multiple" display="chip" />
                            </div>

                        </div>

                    </div>
                    <button onClick={() => {
                        props.setState({
                            ...props.state,
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
