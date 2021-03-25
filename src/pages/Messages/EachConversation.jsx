import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const EachConversation = ({
    data,
    auth
}) => {
    const [state, setState] = useState({
        user: null
    })
    useEffect(() => {
        console.log(data)
        axios(process.env.REACT_APP_API_URL + '/conversations/' + data.id,{
            headers: {
                Authorization:
                    `Bearer ${JSON.parse(localStorage.getItem('state')).auth.jwt}`,
            },
        })
            .then(res => {
                const chat = res.data.users_permissions_users.filter(user => user.id !== auth.user.id)
                setState({ user: chat[0] })
                // console.log('RES --', chat, auth.user)
            })
            .catch(err => {
                console.log('ERR --', err);
            })
    }, [])

    return (
        <div className="box sideBar-body animatd slideInRight">
            <div className="ground-list ground-list-hove bb-1">
                {
                    state.user ? <div className="animatd slideInRight media media-single">
                        <a href="#">
                            <img className="avatar avatar-lg" src={state.user.avatar_url} alt="..." />
                        </a>

                        <div className="media-body">
                            <h6><a href="#">{state.user.username}</a> <span className="time-meta pull-right">18:18</span></h6>
                            <small className="cl-success">Online</small>
                        </div>
                    </div>:null
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachConversation)
