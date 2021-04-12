import React, { useState } from 'react'
import EachPropertyDetail from './EachPropertyDetail'

export default function EachProperty({
    data
}) {

    const [state, setState] = useState({
        showDetails: false
    })
    return (
        <>
            <EachPropertyDetail show={state.showDetails} handleClose={() => setState({ ...state, showDetails: false })} data={data} />
            <div className="col-md-4 col-sm-6 link" onClick={() => setState({ ...state, showDetails: true })}>
                <div className="blox_instagram_latest_image mt-2" >
                    <div className="blox_instagram_latest_image_container">

                        <div className="blox_image_box">
                            <img src={data.image_urls[0]} alt="" style={{ height: '200px' }} />
                            <div className="blox_overlay"></div>
                        </div>

                        <div className="blox_meta_content">


                            <div className="blox_instagram_info">



                                <div className="blox_profile_content">
                                    <div className="blox_profile_name">{data.location}</div>
                                    <div className="blox_follow_count">{data.name.slice(0, 40) + "..."}</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
