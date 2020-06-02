import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import url from '../url'
import moment from 'moment'

function LocationDetail() {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    let { locationId } = useParams()

    moment.locale('en-sg')

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




    return <div style={{ width: '85vw', display: 'flex' }}>
        <div style={{ flex: '1', }}>
            <div style={{ marginLeft: '10%', marginTop: '2%' }}>
                <h1>Name: {data.name}</h1>
                <h2>Type: {data.type}</h2>
                <h5>Address: {data.address}</h5>
                <h5>Contact: {data.phone}</h5>
                <img src={data.Barcode.barcode_url} alt="QR Code" width="200" height="200"></img>
            </div>
        </div>

        <div style={{ flex: '3' }}>
            <Table>
                <thead style={{ color: '#00B979' }}>
                    <tr>
                        <th>Name</th>
                        <th>KTP</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                    </tr>
                </thead>
                <tbody style={{ color: '#46B19C' }}>
                    {data.Barcode.UserBarcodes.map((user, idx) => {
                        return <tr key={idx}>
                            <td>  <Link to={'/users/' + user.User.id}>{user.User.name}</Link> </td>
                            <td> {user.User.no_ktp} </td>
                            <td> {moment(user.checkin).format('MMMM Do YYYY, h:mm:ss a')} </td>
                            <td> {moment(user.checkout).format('MMMM Do YYYY, h:mm:ss a')} </td>
                        </tr>
                    })}
                </tbody>
            </Table>
            {JSON.stringify(data)}
        </div>


    </div>

}

export default LocationDetail