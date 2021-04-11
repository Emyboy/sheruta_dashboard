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
            // console.log('USER FOUND ---', res);
            if (res.data.user.role.name === "Agent") {
                const token = res.data.jwt
                axios(process.env.REACT_APP_API_URL + '/agents/me', {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                })
                    .then(agentData => {
                        dispatch({
                            type: 'SET_AUTH_STATE',
                            payload: {
                                user: res.data.user,
                                agent: agentData.data[0],
                                jwt: res.data.jwt,
                                loading: false
                            }
                        })
                        // console.log('AGENT DATA ---', agentData)
                    })
                    .catch(err => {
                        console.log(err);
                        dispatch({
                            type: 'SET_AUTH_STATE',
                            payload: { loading: false, error: null }
                        })
                    })

            } else {
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

