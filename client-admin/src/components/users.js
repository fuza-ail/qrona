import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Table, Pagination } from 'react-bootstrap'
import { getUsers } from '../store/actions/usersActions'
import { Link } from "react-router-dom"

function UserTable() {
    const { users } = useSelector(state => state.usersReducers)
    const [searchUsers, setSearchUsers] = useState(users)
    const [searchKTP, setSearchKTP] = useState('')
    const [userPage, setUserPage] = useState([])
    const [page, setPage] = useState('0')
    const dispatch = useDispatch()

    const numPerPage = 5

    useEffect(() => {
        if (searchKTP == '') {
            setSearchUsers(users)
        } else {
            let filteredUsers = users.filter(user => user.no_ktp.includes(searchKTP))
            setSearchUsers(filteredUsers)
        }
    }, [searchKTP, users])

    useEffect(() => {
        let formatTable = []
        let tenUser = []
        let idx = 0
        for (let i = 0; i < Math.ceil(searchUsers.length / numPerPage); i++) {
            for (let j = 0; j < numPerPage; j++) {
                if (idx < searchUsers.length) {
                    tenUser.push(searchUsers[idx])
                }
                idx++
            }
            formatTable.push(tenUser)
            tenUser = []
        }
        setUserPage(formatTable[page])
    }, [searchUsers, page])



    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const header = ['KTP', 'Name', 'Address', 'Contact', 'Email', 'Status']

    return <div style={{ width: '85vw' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
            <p style={{ color: '#00B979', fontSize: 24, marginBottom: 0 }}>Users</p>
            <div style={{ display: 'flex', width: '30%' }}>
                <Form.Control type="text" placeholder="Search KTP" onChange={e => setSearchKTP(e.target.value)} />
                <Pagination style={{ margin: "auto 0px" }}>
                    <Pagination.Prev onClick={() => setPage(Number(page) - 1)} disabled={(page > 0) ? false : true} />
                    <Pagination.Next onClick={() => setPage(Number(page) + 1)} disabled={(page < Math.ceil(searchUsers.length / numPerPage) - 1) ? false : true} />
                </Pagination>
            </div>
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
                {userPage && userPage.length > 0 ?
                    userPage.map(user => {
                        return <tr key={user.id}>
                            <td> {user.no_ktp} </td>
                            <td> <Link to={'/users/' + user.id} style={{ color: '#46B19C', fontWeight: 'bold' }}>{user.name} </Link></td>
                            <td> {user.address} </td>
                            <td> {user.phone} </td>
                            <td> {user.email} </td>
                            <td> {user.status} </td>
                        </tr>
                    })
                    : <tr></tr>}

            </tbody>
        </Table>

    </div>

}

export default UserTable