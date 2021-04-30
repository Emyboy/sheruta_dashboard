import axios from "axios"
import store from "../store/store"


export const getAgentProperties = () => dispatch => {
    axios(process.env.REACT_APP_API_URL + '/properties/?agent=' + store.getState().auth.agent.id, {
        headers: {
            Authorization:
                `Bearer ${store.getState().auth.jwt}`,
        },
    })
        .then(res => {
            // console.log(res)
            dispatch({
                type: 'SET_AGENT_STATE',
                payload: {
                    properties: res.data
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
}