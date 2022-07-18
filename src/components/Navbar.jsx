 import React from "react";
 import { Link } from "react-router-dom"

 function Navbar(){
     return( 
     <nav class="navbar navbar-expand-lg navbar-light bg-danger " >
              <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Tindog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Contacts</a>
                    </li>
                  </ul>
                </div>
                <div className="m-2">
                        {/*  */}
                        <Link to="/login"><button className="btn btn-light text-danger m-2">Login</button></Link>
                        {/*  */}
                        <Link to="/signup"><button className="btn btn-light text-danger m-2">SignUp</button> </Link>
                </div>
              </div>
            </nav>)
    
 }


 export default Navbar;