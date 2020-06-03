import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Table } from 'react-bootstrap'
import { getUsers } from '../store/actions/usersActions'
import { Link } from "react-router-dom"

function UserTable() {
    const { users } = useSelector(state => state.usersReducers)
    const [searchUsers, setSearchUsers] = useState(users)
    const [searchKTP, setSearchKTP] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchKTP == '') {
            setSearchUsers(users)
        } else {
            let filteredUsers = users.filter(user => user.no_ktp.includes(searchKTP))
            setSearchUsers(filteredUsers)
        }
    }, [searchKTP, users])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return <div style={{ width: '85vw' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
            <p style={{ color: '#00B979', fontSize: 24, marginBottom: 0 }}>Users</p>
            <Form.Control type="text" placeholder="Search KTP" onChange={e => setSearchKTP(e.target.value)} style={{ width: '30%' }} />
        </div>

        <Table>
            <thead style={{ color: '#00B979' }}>
                <tr>
                    <th>KTP</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody style={{ color: '#46B19C' }}>
                {searchUsers.map(user => {
                    return <tr key={user.id}>
                        <td> {user.no_ktp} </td>
                        <td> <Link to={'/users/' + user.id} style={{ color: '#46B19C', fontWeight: 'bold' }}>{user.name} </Link></td>
                        <td> {user.address} </td>
                        <td> {user.phone} </td>
                        <td> {user.email} </td>
                        <td> {user.status} </td>
                    </tr>
                })}
            </tbody>
        </Table>

    </div>

}

export default UserTable