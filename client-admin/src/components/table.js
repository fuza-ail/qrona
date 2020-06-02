//no longer used
import React, { useState } from 'react';
import Row from './tableRow'
import { Table } from 'react-bootstrap'



function TableView(props) {
    const { users } = props

    const [editId, setEditId] = useState(false)

    function showEdit(id) {
        setEditId(id)
    }

    function hideEdit() {
        setEditId(false)
    }

    return (
        <div style={{ width: '100%' }}>
            <Table >
                <thead style={{ color: '#00B979' }}>
                    <tr>
                        <th>KTP</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Email</th>
                        <th>No. HP</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody style={{ color: '#46B19C' }}>
                    {users.map(user => {
                        return <Row key={user.id} user={user} showEdit={(id) => showEdit(id)} hideEdit={() => hideEdit()} isForm={Number(editId) === Number(user.id) ? true : false} ></Row>
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default TableView;
