import React from "react"
import Logo from "./images/logo.png"

function Header(){
    return (
        <div className="header">
            <img src={Logo} alt="Logo"/>
            <h1>Where all travelers inspired their trips</h1>
        </div>
    )
}

export default Header