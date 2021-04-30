import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal, Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import SubmitForm from '../../pages/SubmitProperty/SubmitForm'
import store from '../../redux/store/store'
import { Spinner } from 'react-activity';
import { getAgentProperties } from '../../redux/actions/agent.action';

const map_dispatch_to_props = {
    GetAgentProperties: getAgentProperties
}

export const EachPropertyDetail = connect(
    null,
    map_dispatch_to_props
)(({
    show,
    handleClose,
    data,
    GetAgentProperties
}) => {
    // console.log('data ---', data)
    const [state, setState] = useState(data);
    const [_state, _setState] = useState({
        showDelte: false,
        deleteLoading: false
    })


    const deleteProperty = () => {
        _setState({ ..._state, deleteLoading: true })
        axios(process.env.REACT_APP_API_URL + '/properties/' + data.id, {
            method: 'DELETE',
            headers: {
                Authorization:
                    `Bearer ${store.getState().auth.jwt}`,
            },
        })
            .then(res => {
                _setState({ ..._state, deleteLoading: false, showDelte: false })
                handleClose();
                GetAgentProperties();
                console.log(res)
                //TODO - Delete Image on firebase
            })
            .catch(err => {
                _setState({ ..._state, deleteLoading: false })
                console.log(err)
            })
    }

    // const getPropertyData = () => {
    //     axios(process.env.REACT_APP_API_URL + '/properites/?id=' + data.id)
    //         .then(res => {
    //             console.log('API DATA ---', res)
    //         })
    //         .catch(err => {
    //             console.log('err')
    //         })
    // };
    // useEffect(() => {
    //     getPropertyData()
    // }, [])

    return (
        <Modal show={show} size='lg'>
            <Modal show={_state.showDelte} size='sm'>
                <Modal.Body>
                    <div className='text-center'>
                        <h5>Are You Sure You Want To Delete?</h5>
                        <hr />
                        <ButtonGroup aria-label="Basic example" className='w-100'>
                            <Button variant="danger" disabled={_state.deleteLoading} className=' w-100' onClick={deleteProperty}>{_state.deleteLoading ? <Spinner color='white' /> : 'Yes'}</Button>
                            <Button variant="secondary" disabled={_state.deleteLoading} className=' w-100' onClick={() => _setState({ ..._state, showDelte: false })}>No</Button>
                        </ButtonGroup>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger ml-3' onClick={() => _setState({ ..._state, showDelte: true })}>Delete</button>
                    </div>
                    {/* <button className='btn btn-danger' onClick={handleClose}>Close</button> */}
                    <button type="button" className="btn bg-white btn-rounded" onClick={handleClose}>
                        <i className="fa fa-close text-danger" style={{ fontSize: '30px' }}></i>
                    </button>
                </div>
                <hr className="m-2" />
                <div className='jumbotron' style={{
                    height: '10%',
                    backgroundImage: `url(${data.image_urls[0]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}><button className='btn btn-info shadow'>Change Image(s)</button></div>
                <SubmitForm data={data} state={state} setState={setState} />
            </Modal.Body>
        </Modal >
    )
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachPropertyDetail)
