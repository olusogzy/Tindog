import React from "react"
import Carousels from "../components/Carousels"
import doglists from "../doglists.js" 
import Navbar from "../components/Navbar"
import Firstdog from "../components/Firstdog"
import Feature from "../components/Feature"
import Footer from "../components/Footer";
import Dogs from "../components/Dogs"

function createDogs(dogslist){
    return (
    <Dogs
        id = {dogslist.id}
        img = {dogslist.img}
        name = {dogslist.name}
        alt = {dogslist.alt}
    />)
    }



function Root(){
    return <div>
            <Navbar />
            <Firstdog />
            <Feature />
            {doglists.map(createDogs)}
            <Carousels />
            <Footer />
    </div>
};


export default Root;