import axios from "axios"



export const getAllConversations = () => dispatch => {
    axios(process.env.REACT_APP_API_URL + '')
}