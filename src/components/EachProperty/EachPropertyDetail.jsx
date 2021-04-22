import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import SubmitForm from '../../pages/SubmitProperty/SubmitForm'

export const EachPropertyDetail = ({
    show,
    handleClose,
    data
}) => {
    console.log('data ---', data)
    const [state, setState] = useState(data)

    const getPropertyData = () => {
        axios(process.env.REACT_APP_API_URL + '/properites/?id=' + data.id)
            .then(res => {
                console.log('API DATA ---', res)
            })
            .catch(err => {
                console.log('err')
            })
    };

    useEffect(() => {
        getPropertyData()
    }, [])

    return (
        <Modal show={show} size='lg'>
            <Modal.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger ml-3'>Delete</button>
                    </div>
                    {/* <button className='btn btn-danger' onClick={handleClose}>Close</button> */}
                    <button type="button" className="btn bg-white btn-rounded" onClick={handleClose}>
                        <i className="fa fa-close text-danger" style={{ fontSize: '30px' }}></i>
                    </button>
                </div>
                <hr className="m-2"/>
                <div className='jumbotron' style={{
                    height: '10%',
                    backgroundImage: `url(${data.image_urls[0]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}><button className='btn btn-info shadow'>Change Image(s)</button></div>
                <SubmitForm data={data} state={state} setState={setState} />
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachPropertyDetail)
