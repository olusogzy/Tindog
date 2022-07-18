import React from "react";
import Dog from "../images/firstpagedog.jpg"


function Firstdog(){
    return(
        <section className="firstdog-section">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src= {Dog} alt="dog section" className="w-100"></img>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-center">
                            <h1 >Create an Amazing profile for your Dog.</h1>
                            <p>connecting dogs together...</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Firstdog;