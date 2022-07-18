import React from "react";
import Check from '../images/check-circle.svg'
import Disc from '../images/disc.svg'
import Heart from '../images/heart.svg'


function Feature(){
    return(
        <section className="bg-light py-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 ">
                            <div className="icon-image">
                                <img src= {Check} alt="check" className=""></img>
                            </div>
                            <h2>Easy to use.</h2>
                            <p>So easy to use your dog can do it</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 ">
                            <div className="icon-image">
                                <img src= {Disc} alt="disc" className=""></img>
                            </div>
                            <h2>Elite Clientele.</h2>
                            <p>We have all the dogs. The greatest dogs</p>
                        </div>
                        <div className=" col-12 col-md-4 col-lg-4 ">
                            <div className="icon-image">
                                <img src= {Heart} alt="heart" className=""></img>
                            </div>
                            <h2>Guarantee to work.</h2>
                            <p>Find the love of your dog life or get your money back</p>
                        </div>
                    </div>

                </div>
            </section>
    )
}

export default Feature;