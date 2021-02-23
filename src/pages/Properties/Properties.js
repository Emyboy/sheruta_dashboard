import React, { useState } from 'react'
import AppPropertyModal from '../../components/AddPropertyModal/AppPropertyModal'
import EachProperty from '../../components/EachProperty/EachProperty'
import Layout from '../../components/Layout'
import Title from '../../components/Title/Title'

export default function Properties() {

    const [state, setState] = useState({
        showAdd: false
    })

    return (
        <Layout
            currentPage='properties'
        >
            <AppPropertyModal show={state.showAdd} toggle={() => setState({ showAdd: !state.showAdd })} />
            <div className='container-fluid'>
                <Title title='Properties' />
                <div className='row'>
                    <EachProperty />
                    <EachProperty />
                    <EachProperty />
                    <EachProperty />
                    <EachProperty />
                    <EachProperty />
                    <EachProperty />
                </div>
                <a onClick={() => setState({ showAdd: !state.showAdd })} className="scroll-to-top cl-white theme-bg shadow-lg" href="#add-property" style={{
                    display: 'inline',
                    width: '80px',
                    height: '80px',
                    paddingTop: '17px',
                    fontSize: '53px',
                    marginBottom: '20px',
                    borderRadius: '100px'
                }}>
                    <i className="fa fa-plus ti-angle-double-up"></i>
                </a>
            </div>
        </Layout >
    )
}
