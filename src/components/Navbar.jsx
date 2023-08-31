import React from "react"
import icons8 from '../images/icons8-world-30.png';

export default function Navbar(){
    return (
        <div className="navbar">
            <img src={icons8} className="navbar--img"/>
            <p className="navbar--text"> Gabriel's Travel Journal</p>
        </div>
    )
}