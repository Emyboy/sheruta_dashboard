import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-activity'
import { connect } from 'react-redux'
import SubmitHeading from './SubmitHeading'
import Select from 'react-select';

export const PersonalInfoForm = (props) => {

    const { auth } = props;
    const [state, setState] = useState({
        loading: false,
        updating: false,
        dataExist: false
    });
    const [data, setData] = useState({
        gender: null,
        phone_number: auth.agent.phone_number,
        agent: auth.agent.id
    })
    const goBack = () => {
        props.setState({
            ...props.state,
            display: 'categories',
        })
    }

    const fetchPersonalInfomation = () => {
        console.log('Feting data')
        setState({ ...state, loading: true })
        console.log('TOKEN --', auth.jwt)
        axios(process.env.REACT_APP_API_URL + '/personal-infos/agent', {
            headers: {
                Authorization:
                    `Bearer ${auth.jwt}`,
            },
        })
            .then(res => {
                console.log('len --', res.data.length)
                setState({ ...state, loading: false })
                if (res.data.length > 0) {
                    setState({ ...state, dataExist: true })
                    setData({ ...data, ...res.data[0] })
                }

                console.log('Personal Info --', res.data);
            })
            .catch(err => {
                console.log('error ---', err);
            })
    }

    const updatePersonalInformation = () => {
        console.log('UPDATING DATA ---', data);
        axios(process.env.REACT_APP_API_URL + '/personal-infos/' + data.id, {
            headers: {
                Authorization:
                    `Bearer ${auth.jwt}`,
            },
            method: 'PUT',
            data: { ...data, agent: auth.agent.id }
        })
            .then(res => {
                props.setState({ ...props.state, display: 'form', persoan_info: res.data.id })
                props.setPersonalInfo(false)
                console.log('update res ---', res)
            })
            .catch(err => {
                console.log('error ----', err);
            })
    }

    const sendPersonalInformation = e => {
        e.preventDefault();
        if (state.dataExist) {
            updatePersonalInformation();
        } else {
            setState({ updating: true })
            axios(process.env.REACT_APP_API_URL + '/personal-infos', {
                headers: {
                    Authorization:
                        `Bearer ${auth.jwt}`,
                },
                method: 'POST',
                data
            })
                .then(res => {
                    setState({ updating: false });
                    props.setState({ display: 'form' })
                    props.setPersonalInfo(false)
                    console.log('RES ---', res)
                })
                .catch(err => {
                    setState({ updating: false })
                    console.log('ERR --', err);
                })
            console.log('SENDING ---', data);
        }
    }

    useEffect(() => {
        fetchPersonalInfomation()
    }, [])

    return (
        <form data-toggle="validator" className="padd-20 animated fadeIn" onSubmit={sendPersonalInformation}>
            {/* <div className="text-center mt-3 mb-3">
                <h3>Personal Info</h3>
            </div> */}
            <SubmitHeading title={'Personal Infomation'} />
            {
                state.loading ? <div style={{ height: '30vh', textAlign: 'center' }}>
                    <Spinner />
                </div> :
                    <>
                        {
                            state.dataExist ? <div className='alert alert-warning'><b>Please check the information before sending.</b><br />The more data you provide, the higher your chances. </div> : <div className='alert alert-warning'>The more data you provide, the higher your chances.</div>
                        }
                        <div className="row mrg-0">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputName" className="control-label">Occupation <span className='text-danger'>(Required)</span></label>
                                    <input defaultValue={data ? data.occupation : ''} name='occupation' type="text" className="form-control" id="occupation" placeholder="Ex. Doctor / Accountant" required onChange={e => setData({ ...data, occupation: e.target.value })} />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputEmail" className="control-label">Company Name <span className='text-danger'>(Required)</span></label>
                                    <input defaultValue={data ? data.company_name : ''} name='company_name' type="text" className="form-control" id="inputEmail" placeholder="Company Name" data-error="Bruh, that email address is invalid" required onChange={e => setData({ ...data, company_name: e.target.value })} />
                                    {/* <div className="help-block with-errors text-danger">Error don hapeen</div> */}
                                </div>
                            </div>

                        </div>

                        <div className="row mrg-0">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputName" className="control-label">Supervisor Name <span className='text-danger'>(Required)</span></label>
                                    <input defaultValue={data ? data.supervisor_name : ''} name='supervisor_name' type="text" className="form-control" id="occupation" placeholder="Ex. Mr. John Doe" required onChange={e => setData({ ...data, supervisor_name: e.target.value })} />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputEmail" className="control-label">Supervisor Number <span className='text-danger'>(Required)</span></label>
                                    <input defaultValue={data ? data.supervisor_number : ''} name='supervisor_number' type="number" className="form-control" id="inputEmail" placeholder="Ex. 08012345678" data-error="Bruh, that email address is invalid" required onChange={e => setData({ ...data, supervisor_number: e.target.value })} />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>

                        <div className="row mrg-0">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputEmail" className="control-label">Gender <span className='text-danger'>(Required)</span></label>
                                    <Select
                                        value={data ? { value: data.gender, label: data.gender } : []}
                                        required={true}
                                        onChange={e => setData({ ...data, gender: e.value })}
                                        options={[
                                            { value: "Male", label: "Male" },
                                            { value: "Female", label: "Female" },
                                        ]}
                                    />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>


                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputName" className="control-label">Marital Status <span className='text-danger'>(Required)</span></label>
                                    <Select
                                        value={data ? { value: data.marital_status, label: data.marital_status } : []}
                                        required={true}
                                        options={[
                                            { value: "Single", label: "Single" },
                                            { value: "Married", label: "Married" },
                                        ]}
                                        onChange={e => setData({ ...data, marital_status: e.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row mrg-0">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputName" className="control-label">Religion</label>
                                    <Select
                                        value={data ? { value: data.religion, label: data.religion } : []}
                                        required={true}
                                        options={[
                                            { value: "Christien", label: "Christien" },
                                            { value: "Islamic", label: "Islamic" },
                                            { value: "Others", label: "Others" },
                                        ]}
                                        onChange={e => setData({ ...data, religion: e.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputEmail" className="control-label">Active Phone Number <span className='text-danger'>(Required)</span></label>
                                    <input defaultValue={data ? data.phone_number : null} name='phone_number' type="number" className="form-control" id="inputEmail" placeholder="Ex. 08012345678" data-error="Bruh, that email address is invalid" required onChange={e => setData({ ...data, phone_number: parseInt(e.target.value) })} />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>


                        <hr />
                        <div className="col-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between">
                                    <button className='btn btn-primary'>Save To Profile<i className='fa fa-save ml-2'></i></button>
                                    {
                                        state.updating ? <Spinner /> :
                                            <button className="btn gredient-btn btn-success">{state.dataExist ? "Next" : "Apply"}</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }

        </form>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm)
