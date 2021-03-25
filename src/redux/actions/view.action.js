import axios from "axios"


export const getAllCategories = () => dispatch => {
    axios(process.env.REACT_APP_API_URL+'/categories')
        .then(res => {
            console.log(res)
            dispatch({
                type: 'SET_VIEW_STATE',
                payload: {
                    categories: res.data
                }
            })
        })
        .catch(err => {
            console.log('error ---', err)
        })
}

