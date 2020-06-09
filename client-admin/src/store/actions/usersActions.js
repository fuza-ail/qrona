import axios from 'axios'
import url from '../../url'


export const getUsers = () => {
    return (dispatch, getState) => {
        axios.get(url + 'users', { headers: { 'access_token': localStorage.access_token } })
            .then(res => {
                dispatch({
                    type: "SET_USERS",
                    payload: res.data,
                })
            }).catch(err => {
                console.log(err)
            })

    }
}