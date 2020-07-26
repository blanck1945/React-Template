import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../layouts/Navbar/navbar'
import HomeNavbar from '../components/home_navbar/HomeNavbar'
import Footer from '../layouts/Footer/Footer'
import "./Root.scss"

const Root = () => {
    return (
        <div className="app_container">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomeNavbar />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default Root

