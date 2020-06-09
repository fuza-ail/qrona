//no  longer use

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../store/actions/usersActions'


function Row(props) {
    const { user, isForm } = props
    const { users } = useSelector(state => state.usersReducers)
    const dispatch = useDispatch()

    function Submit() {
        let newUser = { ...user, status }
        let payload = [...users]
        let idx = payload.findIndex(data => data.id == user.id)
        payload.splice(idx, 1, newUser)
        console.log(payload)
        dispatch(getUsers(payload))
        props.hideEdit()
    }

    const [status, setStatus] = useState(user.status)



    if (!isForm) {
        return <tr><td>{user.no_ktp}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.status}</td>
            <td><Button onClick={() => props.showEdit(user.id)}>Edit</Button>
            </td></tr>
    }

    return (
        <tr>
            {/* <th><Form.Control placeholder="KTP" value={no_ktp} onChange={(e) => setKtp(e.target.value)} disabled /></th>
            <th><Form.Control placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} disabled /></th>
            <th><Form.Control placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled /></th>
            <th><Form.Control placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} disabled /></th>
            <th><Form.Control placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} disabled /></th> */}
            <td>{user.no_ktp}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <th><Form.Control placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} as="select">
                <option value="negative">Negative</option>
                <option value="positive">Positive</option>
                <option value="OTG"> OTG</option>
            </Form.Control>
            </th>
            <th><Button onClick={Submit}>Update</Button></th></tr>
    );
}

export default Row;
