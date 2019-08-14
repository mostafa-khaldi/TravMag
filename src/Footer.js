import React from "react"
import logo from "./images/logo.png"

function Footer(){
    return(
        <div className="footer">
            <div className="wrapper">
                <div className="footer-info">
                    <img src={logo} alt="white-logo" />
                    <div>
                        <ul>
                            <li>About</li>
                            <li>Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="copyright">
                    <p>Copyright &copy; 2019 <strong>TravMag</strong> | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer