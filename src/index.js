import React from "react"
import reactDOM from "react-dom"
import "./main.scss"

const App = () => {
    return (
        <div className="initBox">
            <h1 className="title">Webpack - React Initial Template</h1>
            <div className="dev-box">
                <h2 className="dev-title">Dependencies</h2>
                <h3 className="dev-item">REACT</h3>
                <h3 className="dev-item">SCSS</h3>
                <h3 className="dev-item">REACT ROUTER</h3>
                <h3 className="dev-item">REACT ICONS</h3>
                <h3 className="dev-item">REACT HOOK FORM</h3>
                <h3 className="dev-item">AXIOS</h3>
            </div>
        </div>

    )
}

reactDOM.render(<App />, document.getElementById("root"))