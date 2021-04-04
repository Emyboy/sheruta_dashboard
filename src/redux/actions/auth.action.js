import axios from "axios"
import store from "../store/store"



export const loginAgent = data => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: { loading: true, error: null }
    })
    axios(process.env.REACT_APP_API_URL + '/auth/local', {
        data,
        method: 'POST'
    })
        .then(res => {
            if(res.data.user.agent){
                dispatch({
                    type: 'SET_AUTH_STATE',
                    payload: {
                        user: res.data.user,
                        agent: res.data.user.agent,
                        jwt: res.data.jwt,
                        loading: false
                    }
                })
            }else {
                dispatch({
                    type: 'SET_AUTH_STATE',
                    payload: {
                        error: 'Sorry, Account doesn\'t belong to an agent.',
                        loading: false
                    }
                })
            }
            // localStorage.setItem('auth', JSON.stringify(store.getState().auth))
        })
        .catch(err => {
            dispatch({
                type: 'SET_AUTH_STATE',
                payload: { loading: false, error: 'Something went wrong please try again.' }
            })
            setTimeout(() => {
                dispatch({
                    type: 'SET_AUTH_STATE',
                    payload: { error: null }
                })
            }, 3000);
            console.log(err)
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

