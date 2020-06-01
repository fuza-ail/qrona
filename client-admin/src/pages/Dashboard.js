import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import UserTable from '../components/users'
import LocationTable from '../components/locations'
import Navbar from '../components/navbar'

function Dashboard() {
    const history = useHistory();
    const [showUsers, setShowUsers] = useState(true)

    console.log(history)
    //check if login
    if (!localStorage.access_token) {
        history.push("/login")
    }


    return <div style={{ display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Navbar />

        <h1 style={{ padding: 20, color: '#00B979' }}>DashBoard</h1>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
            <a onClick={() => setShowUsers(true)} style={{ cursor: 'pointer' }}>Users Data</a>
            <a>&nbsp; |  &nbsp;</a>
            <a onClick={() => setShowUsers(false)} style={{ cursor: 'pointer' }}>Locations Data</a>
        </div>

        <div style={{ width: '85vw' }}>
            {showUsers ? <UserTable /> : <LocationTable />}
        </div>

    </div >
}

export default Dashboard

