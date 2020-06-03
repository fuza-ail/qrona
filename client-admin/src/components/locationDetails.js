import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Table, Card } from 'react-bootstrap'
import axios from 'axios'
import url from '../url'
import moment from 'moment'


//for template
import logo from '../logo.png'


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




    return <div style={{ width: '85vw', display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: '1', }}>
            <Card style={{ width: 'auto' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body style={{ paddingRight: '15%', paddingLeft: '15%', color: '#46B19C', paddingBottom: '10%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
                        <img src={logo} alt="QR Code, data.Barcode.barcode_url" width="200" height="200" style={{ alignSelf: 'center' }}></img>
                    </div>
                    <Card.Title style={{ textAlign: 'center', fontSize: '30px', paddingTop: '10%', paddingBottom: '10%' }}>{data.name}</Card.Title>
                    <Card.Text style={{ fontWeight: 'bold' }}>Status: {data.status}</Card.Text>
                    <Card.Text>KTP: {data.no_ktp}</Card.Text>
                    <Card.Text>Address: {data.address}</Card.Text>
                    <Card.Text>Status: {data.phone}</Card.Text>
                </Card.Body>
            </Card>
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
                            <td>  <Link to={'/users/' + user.User.id} style={{ color: '#46B19C', fontWeight: 'bold' }} >{user.User.name}</Link> </td>
                            <td> {user.User.no_ktp} </td>
                            <td> {moment(user.checkin).format('MMMM Do YYYY, h:mm:ss a')} </td>
                            <td> {moment(user.checkout).format('MMMM Do YYYY, h:mm:ss a')} </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>



    </div>

}

export default LocationDetail