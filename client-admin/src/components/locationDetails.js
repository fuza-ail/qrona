import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import url from '../url'

function LocationDetail() {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    let { locationId } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(url + 'reghotplace/' + locationId, { headers: { 'access_token': localStorage.access_token } })
            .then(res => {
                console.log(res)
                setData(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>Loading..</h1>
    }


    return <div style={{ width: '85vw' }}>
        {JSON.stringify(data)}

        <h1>Name: {data.name}</h1>
        <h2>Type: {data.type}</h2>
        <h5>Address: {data.address}</h5>
        <h5>Contact: {data.phone}</h5>

    </div>

}

export default LocationDetail