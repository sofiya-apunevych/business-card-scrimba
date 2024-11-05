import React from "react"


import Photo from "./components/Photo"
 import Name from "./components/Name"
 import Reference from "./components/Reference"
 import AboutInterests from "./components/AboutInterests"
 import Footer from "./components/Footer"
 

export default function App(){
    return (
        
        <div className="wrapper">
        <Photo/>
        <Name/>
        <Reference/>
        <AboutInterests/>
        <Footer/>
        </div>
        
    )
}