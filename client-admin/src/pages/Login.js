import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import logo from '../logo.png'
import { useHistory } from "react-router-dom";
import url from '../url'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //check if already login
    if (localStorage.access_token) {
        history.push("/")
    }


    function login(e) {
        e.preventDefault()
        //localsotrage test
        axios.post(url + 'loginadmin', { email, password })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                history.push("/")
            }).catch(err => {
                toast.error('Invalid Cridentials', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }



    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <img src={logo} alt="logo" style={{ height: '15vh', width: '15vh', marginBottom: '20px' }} />
        <div style={{ backgroundColor: '#65DCB8', width: '20vw' }}>
            <Form style={{ margin: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', }} onSubmit={login}>

                <p style={{ fontWeight: 'bold', fontSize: '36px', marginBottom: 0 }}>QRona</p>
                <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Admin</p>
                <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                    <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: '20px', color: '	#ec586e' }}>Email</p>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ width: '100%' }} >
                    <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: '20px', color: '	#ec586e' }}>Password</p>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="light" type="submit" style={{ width: '100%', color: 'white', backgroundColor: '#ec586e' }}>
                    Login </Button>
            </Form>

        </div>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />




    </div>
}

export default Login

