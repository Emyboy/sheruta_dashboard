import axios from "axios"
import store from "../store"



export const loginAgent = data => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: { loading: true }
    })
    axios(process.env.REACT_APP_API_URL + '/auth/local', {
        data,
        method: 'POST'
    })
        .then(res => {
            dispatch({
                type: 'SET_AUTH_STATE',
                payload: {
                    user: res.data.user,
                    agent: res.data.user.agent,
                    jwt: res.data.jwt,
                    loading: false
                }
            })
            localStorage.setItem('auth', JSON.stringify(store.getState().auth))
            // console.log(res)
        })
        .catch(err => {
            dispatch({
                type: 'SET_AUTH_STATE',
                payload: { loading: false }
            })
            // console.log(err)
        })
}


export const logoutAgent = () => dispatch => {
    console.log('bye')
    localStorage.clear();
    sessionStorage.clear();
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: {
            jwt: null,
            user: null,
            agent: null,
            loading: false
        }
    })
}

