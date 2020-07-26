import React, { useState } from 'react'
import working from "../../assets/navbar_img/working.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./HomeNavbar.scss"

const HomeNavbar = () => {

    const [img, setImg] = useState("working.jpg")

    return (
        <div className="home_nav">
            <LazyLoadImage src={working} alt="central_img" effect="blur" height="100%" width="100%" />
            <div className="abs-Box">
                <h2>Webpack - React Init Template</h2>
                <h3>React</h3>
                <h3>SCSS</h3>
                <h3>React Router</h3>
                <h3>React icons</h3>
                <h3>React Hook forms</h3>
                <h3>Axios</h3>
                <h3>Lazy Loading Image</h3>
            </div>
        </div>
    )
}

export default HomeNavbar
