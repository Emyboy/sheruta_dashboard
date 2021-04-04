import React from 'react'

export default function EachProperty({
    data
}) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <img className="card-img-top" src={data.image_urls[0]} alt="Card image cap" />
                <div className="card-block">
                    <h5 className="font-normal mrg-bot-0 font-18 card-title">{data.name}</h5>
                    <p className="card-small-text">Web Designer</p>
                    <ul className="card-list">
                        <li><i className="ti-location-pin"></i> {data.location}</li>
                        <li><i className="ti-email"></i> support@yourgmail.com</li>
                        <li><i className="ti-mobile"></i> {data.price}</li>
                    </ul>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link bg-success" href="#">Edit <i className='fa fa-edit'></i></a></li>
                        <li className="page-item"><a className="page-link bg-danger" href="#">Delete <i className='fa fa-trash'></i></a></li>
                        <li className="page-item"><a className="page-link bg-warning" href="#">Promote <i className='fa fa-chevron-up'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
