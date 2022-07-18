import React from "react";

function Dogs(props){
    return <section className="dog-selection">
    <div className="container">
        <div className="row">
            <div className="card select-img col-12 col-md-4 col-lg-4 ">
                <img src= {props.img} alt= {props.alt} className="select-img-section w-100"></img>
                <h3>{props.name}</h3>
            </div>
        </div>
    </div>    
</section>
}

export default Dogs;