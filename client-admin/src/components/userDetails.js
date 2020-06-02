import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import url from '../url'

function UserDetail() {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState('')
    const [showForm, setShowForm] = useState(false)
    let { userId } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(url + 'users/' + userId, { headers: { 'access_token': localStorage.access_token } })
            .then(res => {
                setData(res.data)
                setStatus(data.status)
                setLoading(false)
            })
    }, [])


    function updateStatus() {
        axios({
            method: 'PUT',
            url: url + 'users/' + userId,
            headers: { 'access_token': localStorage.access_token },
            data: { status }
        }).then(res => {
            let newData = { ...data, status }
            setData(newData)
            setShowForm(false)
        })
    }

    if (loading) {
        return <h1>Loading..</h1>
    }


    return <div style={{ width: '85vw' }}>
        {JSON.stringify(data)}

        <h1>Name: {data.name}</h1>
        <h2>Status: {data.status}</h2>
        <h5>KTP: {data.no_ktp}</h5>
        <h5>Address: {data.address}</h5>
        <h5>Contact: {data.phone}</h5>



        {showForm ?
            <div>
                <Form.Control placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} as="select">
                    <option value="negatif">Negatif</option>
                    <option value="positif">Positif</option>
                    <option value="OTG"> OTG</option>
                </Form.Control>
                <Button onClick={updateStatus}>Confirm</Button>
                <Button onClick={() => { setShowForm(false); setStatus(data.status) }}>Cancel</Button> </div> :
            <Button onClick={() => setShowForm(true)}>Change Status</Button>

        }


        <Table>
            <thead style={{ color: '#00B979' }}>
                <tr>
                    <th>QR Code</th>
                    <th>Location Name</th>
                    <th>Location Type</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                </tr>
            </thead>
            <tbody style={{ color: '#46B19C' }}>
                {data.UserBarcodes.map(barcode => {
                    return <tr key={barcode.checkin}>
                        <td> {barcode.Barcode.barcode_url} </td>
                        <td> {barcode.Barcode.Hotplace.name} </td>
                        <td> {barcode.Barcode.Hotplace.type} </td>
                        <td> {barcode.checkin} </td>
                        <td> {barcode.checkout} </td>
                    </tr>
                })}
            </tbody>
        </Table>






    </div>

}

export default UserDetail