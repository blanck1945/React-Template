import React from "react"
import reactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./main.scss"
import Root from "./Root/Root"


const App = () => {
    return (
        <Router>
            <div className="container">
                <Root />
            </div>
        </Router>
    )
}

reactDOM.render(<App />, document.getElementById("root"))