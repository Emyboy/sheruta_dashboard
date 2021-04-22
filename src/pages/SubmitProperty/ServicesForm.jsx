import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const ServicesForm = ({
    state,
    setState,
    handleFirstNext
}) => {

    const [services, setServices] = useState([])

    const getAllServices = () => {
        axios(process.env.REACT_APP_API_URL + '/services')
            .then(res => {
                console.log(res)
                setServices(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllServices()
    }, [])

    return (
        <div>
            <div className='text-center mt-4'>
                <h3>Select A Service</h3>
            </div>
            <hr />
            <div className="row setup-content" id="step-1" style={{ justifyContent: 'center' }}>
                {/* <div onClick={() => setState({ ...state, service: null })} className='col-md-4 col-sm-6 link'>
                    <div className={`card ${state.service === null ? 'bg-info' : 'bg-secondary'} text-white mb-3 text-center`}>
                        <h4 className='mt-2 mb-2'>{"none".toUpperCase()}</h4>
                    </div>
                </div> */}
                {
                    services.map((val, i) => {
                        return <div onClick={() => setState({ ...state, service: val })} key={i} className='col-md-4 col-sm-6 link'>
                            <div className={`card ${state.service === val ? 'bg-info' : 'bg-secondary'} text-white mb-3 text-center`}>
                                <h4 className='mt-2 mb-2'>{val.name.toUpperCase()}</h4>
                            </div>
                        </div>
                    })
                }
            </div>
            <button type='button' className='btn btn-success' disabled={!state.service} onClick={handleFirstNext}>Next</button>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesForm)
