import React, { useState, useEffect } from 'react';
import ViewTable from '../components/table'
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

function UserTable() {
    const { users } = useSelector(state => state.usersReducers)
    const [searchUsers, setSearchUsers] = useState(users)
    const [searchKTP, setSearchKTP] = useState('')

    useEffect(() => {
        if (searchKTP == '') {
            setSearchUsers(users)
        } else {
            let filteredUsers = users.filter(user => user.no_ktp.includes(searchKTP))
            setSearchUsers(filteredUsers)
        }
    }, [searchKTP, users])

    return <div>

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
            <p style={{ color: '#00B979', fontSize: 24, marginBottom: 0 }}>Users Data</p>
            <Form.Control type="text" placeholder="Search KTP" onChange={e => setSearchKTP(e.target.value)} style={{ width: '30%' }} />
        </div>

        <ViewTable users={searchUsers} />

    </div>

}

export default UserTable