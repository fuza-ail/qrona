import React, { useState } from 'react';
import { useHistory, Route, Link, Switch } from "react-router-dom";
import UserTable from '../components/users'
import LocationTable from '../components/locations'
import Navbar from '../components/navbar'
import LocationDetails from '../components/locationDetails'
import UserDetail from '../components/userDetails'

function Dashboard() {
    const history = useHistory();
    const [showUsers, setShowUsers] = useState(true)

    //check if login
    if (!localStorage.access_token) {
        history.push("/login")
    }


    return <div style={{ display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Navbar />


        <h1 style={{ padding: 20, color: '#00B979' }}>DashBoard</h1>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', color: '#65DCB8' }}>
            <Link to={'/'} style={{ color: '#ec586e' }}>Users</Link> &nbsp; |  &nbsp; <Link to={'/locations'} style={{ color: '#ec586e' }}>Crowd Points</Link>
        </div>



        <Switch>
            <Route path="/locations/:locationId">
                <LocationDetails />
            </Route>
            <Route path="/locations">
                <LocationTable />
            </Route>
            <Route path="/users/:userId">
                <UserDetail />
            </Route>
            <Route path="/">
                <UserTable />
            </Route>
        </Switch>

    </div >
}

export default Dashboard

