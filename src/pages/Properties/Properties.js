import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EachProperty from '../../components/EachProperty/EachProperty'
import Layout from '../../components/Layout'
import Title from '../../components/Title/Title'
import { getAgentProperties } from '../../redux/actions/agent.action';

const mapStateToPrpos = state => ({
    agent: state.agent
});

const mapActions = {
    getAgentProperties
}

export default connect(
    mapStateToPrpos,
    mapActions
)(props => {

    const [state, setState] = useState({
        showAdd: false
    })

    useEffect(() => {
        props.getAgentProperties()
    }, [])

    return (
        <Layout
            currentPage='properties'
        >
            <div className='container-fluid'>
                <Title title='Properties' />
                {
                    props.agent.properties.length === 0 ?
                        <div className='text-center w-100'>
                            <h4>No Property</h4>
                            <h6>Click on the '+' button to add one.</h6>
                        </div> : null
                }
                <div className='row'>
                    {
                        props.agent.properties.map((val, i) => {
                            return <EachProperty key={i} data={val} />
                        })
                    }
                </div>
                <Link to='/submit/property' onClick={() => setState({ showAdd: !state.showAdd })} className="scroll-to-top cl-white theme-bg shadow-lg" href="#add-property" style={{
                    display: 'inline',
                    width: '80px',
                    height: '80px',
                    paddingTop: '17px',
                    fontSize: '53px',
                    marginBottom: '20px',
                    borderRadius: '100px'
                }}>
                    <i className="fa fa-plus ti-angle-double-up"></i>
                </Link>
            </div>
        </Layout >
    )
});
