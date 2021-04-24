import React from 'react'
import { connect } from 'react-redux'

const EachBlog = (props) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
            <div className="uc_soft_product_box border">
                <div className="uc_box_product">
                    <div className="uc_product_col">

                        <div className="uc_box_pic">
                            <div className="uc_pic_box">
                                <img src="assets/dist/img/pro/pro-1.jpg" alt="" /></div>
                            </div>

                            <div className="uc_product_details">
                                <span>Soft Product Box</span>
                                <span className="uc_price">$950</span>

                                <div className="uc_view_cart">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                    <span>|</span>
                                    <a href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EachBlog)
