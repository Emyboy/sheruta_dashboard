import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../../redux/actions/view.action'
import { Spinner } from 'react-activity'

export const SelectCategory = (props) => {

    useEffect(() => {
        props.getAllCategories()
    }, [])

    return (
        <div>
            {
                props.view.categories.length === 0 ? <div className='text-center' style={{ marginTop: '20%' }}><Spinner size={30} /></div> : null
            }
            <>
                <div className='text-center mb-5'><h2>Select Category</h2></div>
                {
                    props.view.categories.map((val, i) => {
                        return <div key={i} onClick={() => props.setState({ ...props.state, category: val })} className='card text-center border-sucess' style={{ borderColor: val === props.state.category ? 'green' : null, borderWidth: '2px' }}>
                            <div className='card-body'>
                                <h2>{val.name.toUpperCase()}</h2>
                            </div>
                        </div>
                    })
                }
                <button disabled={!props.state.category} className='btn btn-success w-100'>Next</button>
            </>
        </div>
    )
}

const mapStateToProps = (state) => ({
    view: state.view
})

const mapDispatchToProps = {
    getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory)
