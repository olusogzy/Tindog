import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Root from "../components/Root"
import { Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import Signup from "../components/Signup";
import Welcome from "../components/Welcome"




function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element= {<Signup />} />
                <Route path="/welcome" element= {<Welcome />} />
            </Routes>

            {/* { props.fullDetails ? "Sucessful" : <Login />} */}
    </div>
    )

        
    

}

export default App;