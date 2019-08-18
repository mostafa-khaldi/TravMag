import React from "react"
import Logo from "./images/logo.png"

function Header(){
    return (
        <div className="header">
            <img className="wrapper logo" src={Logo} alt="Logo"/>
            <h1 className="wrapper">Where all travelers inspire their trips</h1>
        </div>
    )
}

export default Header