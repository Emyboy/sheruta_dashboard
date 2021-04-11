import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../../redux/actions/view.action';

const Categories = props => {
    const { state, setState, handleFirstNext } = props;
    useEffect(() => {
        props.getAllCategories()
    }, [])
    return (
        <div>
            <div className='text-center mt-4'>
                <h3>What do you want to upload?</h3>
            </div>
            <hr />
            <div className="row setup-content" id="step-1" style={{ justifyContent: 'center' }}>
                {
                    props.view.categories.map((val, i) => {
                        return (<div onClick={() => setState({ ...state, category: val })} key={i} className='col-md-4 col-sm-6 link'>
                            <div className={`card ${state.category === val ? 'bg-info' : 'bg-secondary'} text-white mb-3 text-center`}>
                                <h4 className='mt-2 mb-2'>{val.name.toUpperCase()}</h4>
                            </div>
                        </div>)
                    })
                }
            </div>
            <hr />
            <button
                disabled={!state.category}
                className="btn nextBtn btn-success pull-right"
                type="button"
                onClick={() => setState({
                    ...state,
                    display: 'services'
                })}
            >
                Next
            </button>

        </div>
    )
}

const mapStateToProps = (state) => ({
    view: state.view
})

const mapDispatchToProps = {
    getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
