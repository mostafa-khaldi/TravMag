import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {BrowserRouter as Router, Route} from "react-router-dom"

ReactDom.render(<Router basename={process.env.PUBLIC_URL}><Route component={App}></Route></Router>,document.getElementById("root"))

