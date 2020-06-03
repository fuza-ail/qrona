import axios from 'axios'
import url from '../../url'


export const getLocations = () => {
    return (dispatch, getState) => {
        axios.get(url + 'reghotplace', { headers: { 'access_token': localStorage.access_token } })
            .then(res => {
                dispatch({
                    type: "SET_LOCATIONS",
                    payload: res.data,
                })
            }).catch(err => {
                console.log(err)
            })

    }
}