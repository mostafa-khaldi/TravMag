import React from "react"
import ReactDom from "react-dom"
import Header from "./Header"
import App from "./App"
import Footer from "./Footer"

ReactDom.render(<Header/>, document.getElementById("header"))
ReactDom.render(<App/>,document.getElementById("root"))
ReactDom.render(<Footer/>,document.getElementById("footer"))
