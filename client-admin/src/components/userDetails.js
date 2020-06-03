import React, { useState, useEffect } from 'react';
import { Button, Form, Table, Modal, Card } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import url from '../url'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import spin from '../loading.svg'


//for template
import logo from '../logo.png'


function UserDetail() {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [showModal, setShowModal] = useState({ show: false, url: '' });
    let { userId } = useParams()

    moment.locale('en-sg')


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
            toast.success('Status Successfully Updated', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    if (loading) {
        // return <h1>Loading..</h1>

        return <div><img src={spin} alt='Loading Spinner'></img></div>
    }


    return <div style={{ width: '85vw', display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: '1', }}>
            <Card style={{ width: 'auto' }}>
                <Card.Body style={{ paddingRight: '15%', paddingLeft: '15%', color: '#46B19C', paddingBottom: '10%' }}>
                    <Card.Title style={{ textAlign: 'center', fontSize: '30px', paddingTop: '10%', paddingBottom: '10%' }}>{data.name}</Card.Title>
                    <Card.Text style={{ fontWeight: 'bold' }}>Status: {data.status}</Card.Text>
                    <Card.Text>KTP: {data.no_ktp}</Card.Text>
                    <Card.Text>Address: {data.address}</Card.Text>
                    <Card.Text>Status: {data.phone}</Card.Text>
                    {showForm ?
                        <div>
                            <Form.Control placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} as="select" style={{ marginBottom: '10px' }}>
                                <option value="negatif">Negatif</option>
                                <option value="positif">Positif</option>
                                <option value="OTG"> OTG</option>
                            </Form.Control>
                            <Button variant="light" style={{ color: 'white', backgroundColor: '#ec586e', marginRight: '5px' }} onClick={updateStatus}>Confirm</Button>
                            <Button variant="warning" onClick={() => { setShowForm(false); setStatus(data.status) }}>Cancel</Button> </div> :
                        <Button variant="light" style={{ color: 'white', backgroundColor: '#ec586e' }} onClick={() => setShowForm(true)}>Change Status</Button>
                    }
                </Card.Body>
            </Card>
        </div>

        <div style={{ flex: '3' }}>
            <Table>
                <thead style={{ color: '#00B979' }}>
                    <tr>
                        <th>QR Code</th>
                        <th>Crowd Point</th>
                        <th>Point Type</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                    </tr>
                </thead>
                <tbody style={{ color: '#46B19C' }}>
                    {data.UserBarcodes.map(barcode => {
                        if (barcode.Barcode) {
                            return <tr key={barcode.checkin} >
                                <td style={{ verticalAlign: 'middle' }}>
                                    <img src={barcode.Barcode.barcode_url !== 'google.com' && barcode.Barcode.barcode_url ? barcode.Barcode.barcode_url : logo} alt="QR Code" width="50" height="50"
                                        onClick={() => setShowModal({ show: true, url: barcode.Barcode.barcode_url !== 'google.com' && barcode.Barcode.barcode_url ? barcode.Barcode.barcode_url : logo })}
                                        style={{ cursor: 'pointer' }}></img>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>  <Link to={'/locations/' + barcode.Barcode.Hotplace.id} style={{ color: '#46B19C', fontWeight: 'bold' }}>{barcode.Barcode.Hotplace.name}</Link> </td>
                                <td style={{ verticalAlign: 'middle' }}> {barcode.Barcode.Hotplace.type} </td>
                                <td style={{ verticalAlign: 'middle' }}> {moment(barcode.checkin).format('MMMM Do YYYY, h:mm:ss a')} </td>
                                <td style={{ verticalAlign: 'middle' }}> {moment(barcode.checkout).format('MMMM Do YYYY, h:mm:ss a')} </td>
                            </tr>
                        }
                    })}
                </tbody>
            </Table>
        </div>

        <Modal show={showModal.show} onHide={() => setShowModal({ show: false, url: '' })} >
            <img src={showModal.url} alt="QR Code" width="500" height="500"></img>
        </Modal>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />


    </div>

}

export default UserDetail