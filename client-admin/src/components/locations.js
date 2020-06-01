import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function LocationTable() {

    const { locations } = useSelector(state => state.locationsReducers)
    const [searchLocation, setSearchLocation] = useState(locations)
    const [searchName, setName] = useState('')

    useEffect(() => {
        if (searchName == '') {
            setSearchLocation(locations)
        } else {
            let filteredLocation = locations.filter(location => location.name.includes(searchName))
            setSearchLocation(filteredLocation)
        }
    }, [searchName, locations])

    return <div >

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
            <p style={{ color: '#00B979', fontSize: 24, marginBottom: 0 }}>Locations Data</p>
            <Form.Control type="text" placeholder="Search Hotplace" onChange={e => setName(e.target.value)} style={{ width: '30%' }} />
        </div>

        <Table>
            <thead style={{ color: '#00B979' }}>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody style={{ color: '#46B19C' }}>
                {searchLocation.map(location => {
                    return <tr key={location.id}>
                        <td> {location.name} </td>
                        <td> {location.address} </td>
                        <td> {location.phone} </td>
                        <td> {location.type} </td>
                        <td>detail</td>
                    </tr>
                })}
            </tbody>
        </Table>

    </div>

}

export default LocationTable