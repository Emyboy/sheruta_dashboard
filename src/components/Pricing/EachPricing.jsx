import React from 'react'
import { connect } from 'react-redux'

const EachPricing = (props) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="pricingTable mrg-bot-30">
                <div className="pricingTable-header">
                    <span className="heading">
                        Standard
								</span>
                </div>

                <div className="pricing-plans">
                    <span className="price-value"><i className="fa fa-usd"></i><span>17</span></span>
                    <span className="subtitle">Standard Package</span>
                </div>

                <div className="pricingContent">
                    <ul>
                        <li><b>50GB</b> Disk Space</li>
                        <li><b>50</b>Email Accounts</li>
                        <li><b>50GB</b> Monthly Bandwidth</li>
                        <li><b>10</b> subdomains</li>
                        <li><b>15</b> Domains</li>
                    </ul>
                </div>

                <div className="pricingTable-sign-up">
                    <a href="#" className="btn btn-block btn-default">buy now</a>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachPricing)
