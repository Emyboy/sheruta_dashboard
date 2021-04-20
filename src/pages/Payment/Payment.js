import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import Pricing from '../../components/Pricing/Pricing'

const Payment = (props) => {
    return (
        <Layout currentPage={'payments'}>
            <div>
                <Pricing />
            </div>  
       </Layout>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
