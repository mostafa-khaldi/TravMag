import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {BorwserRouter as Router} from "react-router-dom"

ReactDom.render(<Router basename={process.env.PUBLIC_URL}><App/></Router>,document.getElementById("root"))
