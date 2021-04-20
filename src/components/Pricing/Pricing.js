import React from 'react'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import EachPricing from './EachPricing'
import { PaystackButton } from "react-paystack"

const componentProps = {
    email: 'chukwuemekaifeora@gmail.com',
    amount: '100000',
    metadata: {
        name:"emeka",
        phone: "+23494847485943",
    },
    publicKey:'pk_test_7130b4dfd9558bafe8f83043a8d50455af44f25b',
    text: "Buy Now",
    onSuccess: e => {
        // setEmail("")
        // setName("")
        // setPhone("")
        console.log("eeeeee ---,",e)
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
}

const Pricing = (props) => {
    return (
        <div className='container'>
            <PaystackButton className="paystack-button" {...componentProps} />
            <Title title="Pricing" />
            <div className='row'>
                <EachPricing />
                <EachPricing />
                <EachPricing />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing)
