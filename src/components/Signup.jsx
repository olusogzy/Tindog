import React, { useState } from "react"

import { useNavigate  , Link } from "react-router-dom"
import { Button , Form } from "react-bootstrap" 
import Signupimg from "../images/signupimg.jpg"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "../components/Login"

const inputValue = {
        email: "",
        username: "",
        password: ""
}



function Signup( ){
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const {error, setError} = useState("")
  // const history = useHistory()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>{
      setLoading(false);
      console.log('sucessful');
      navigate('/')
    })

  }
    
    return( 
    <div>
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <img src= {Signupimg} alt="signupImage" className="w-100"></img>
            </div>
    
            <div className="col-12 col-md-6 col-lg-6">
            <Button variant="danger">Sign Up with Google</Button>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                name="email" 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                name="username" 
                type="text"
                onChange={(e) => setUsername(e.target.value)} 
                value={username} 
                placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  name="password" 
                  type="password"
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit" >
                  Submit
                </Button>
              </Form>
              <p>ALready have an account? <Link to="/login">Login</Link></p>
          </div>
      </div>
    </div>
</div>)

}

export default Signup;