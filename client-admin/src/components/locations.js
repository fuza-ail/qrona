import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getLocations } from '../store/actions/locationsActions'
import { Link } from "react-router-dom"

function LocationTable() {

    const { locations } = useSelector(state => state.locationsReducers)
    const [searchLocation, setSearchLocation] = useState(locations)
    const [searchName, setName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (searchName == '') {
            setSearchLocation(locations)
        } else {
            let filteredLocation = locations.filter(location => location.name.includes(searchName))
            setSearchLocation(filteredLocation)
        }
    }, [searchName, locations])

    useEffect(() => {
        dispatch(getLocations())
    }, [])


    return <div style={{ width: '85vw' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
            <p style={{ color: '#00B979', fontSize: 24, marginBottom: 0 }}>Crowd Points</p>
            <Form.Control type="text" placeholder="Search Crowd Point" onChange={e => setName(e.target.value)} style={{ width: '30%' }} />
        </div>



        <Table>
            <thead style={{ color: '#00B979' }}>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th>Created By</th>
                </tr>
            </thead>
            <tbody style={{ color: '#46B19C' }}>
                {searchLocation.map(location => {
                    return <tr key={location.id}>
                        <td> <Link to={'/locations/' + location.id} style={{ color: '#46B19C', fontWeight: 'bold' }}>{location.name}</Link></td>
                        <td> {location.address} </td>
                        <td> {location.phone} </td>
                        <td> {location.type} </td>
                        <td> {location.User ? <Link to={'/users/' + location.User.id} style={{ color: '#ec586e' }}>{location.User.name}</Link> : 'N/A'} </td>

                    </tr>
                })}
            </tbody>
        </Table>

    </div>

}

export default LocationTable