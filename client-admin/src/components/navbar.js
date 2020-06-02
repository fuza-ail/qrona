import React from 'react';
import { Button, Navbar } from 'react-bootstrap'
import logo from '../logo.png'
import { useHistory } from "react-router-dom";


function Dashboard() {
    const history = useHistory();

    function logout(e) {
        e.preventDefault()
        //localsotrage test
        localStorage.removeItem('access_token')
        history.push("/login")
    }


    return <div style={{ width: '100%' }}>
        <Navbar style={{ backgroundColor: '#65DCB8', display: 'flex', justifyContent: 'space-between' }}>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} QRona Adminitrative Site</Navbar.Brand>

            <Button variant="light" style={{ color: 'white', backgroundColor: '#ec586e' }} onClick={logout}> Logout </Button>


        </Navbar>


    </div>
}

export default Dashboard