import React , { useState } from "react";
import { Link } from "react-router-dom"
import { Button , Form } from "react-bootstrap"
import LoginImg from "../images/login-img.jpg"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState()

    const navigate = useNavigate()

    const signIN = (e) => {
        e.preventDefault()
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setLoading(false)
            const user = userCredential.user;
            console.log("Welcome to Tindog")
            navigate('/welcome')
        })
    }

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <img src= {LoginImg} alt="loginImage" className="w-100"></img>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                <Form className="signupForm" onSubmit={signIN}>
                    <Button className="btn-danger">Login with Google</Button>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                      type="email" 
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter email" />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                      Submit
                    </Button>

                    <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
                </Form>
                </div>
            </div>
        </div>
    
    </div>
};


export default Login;