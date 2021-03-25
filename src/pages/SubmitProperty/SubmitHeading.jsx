import React from 'react'

export default function SubmitHeading({
    goBack,
    title
}) {
    return (
        <div className="row page-titles">
            <div className="col-md-12 row">
                <h4 onClick={goBack} className="theme-cl"><i className='ti ti-arrow-left'></i></h4>
                <div className='pl-5'>
                    <h4 className="theme-cl">{title}</h4>
                </div>
            </div>
        </div>
    )
}
