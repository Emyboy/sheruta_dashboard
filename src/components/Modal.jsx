import React from 'react'

export default function Modal({
    toggle,
    show,
    children
}) {
    if(show){
        return (
            <div className="modal modal-box-1 fade show" id="modal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" style={{ paddingRight: '17px', display: "block", background: '#002316ab' }}>
                <div className="modal-dialog modal-lg showSweetAlert visible">
                    <div className="modal-content"  id="myModalLabel1">
                        <div className="modal-header theme-bg">
                            <i type="button" onClick={toggle} className="close fa fa-close" data-dismiss="modal" aria-hidden="true"></i>
                        </div>
                        <div className="modal-body" style={{ height: '85vh', overflowY: 'scroll' }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
        return null;
    }
}
