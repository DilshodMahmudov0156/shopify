import React from 'react';
import {Link} from "react-router-dom";
import "./header.css";
import HeaderSlider from "./slider/header-slider";
import image from "../../images/myimage.jpg";
import image2 from "../../images/myimage2.jpg";
import image3 from "../../images/myimage3.jpg";

interface sliderImages {
    url: string
}

function Header() {
    const slides: sliderImages[] = [
        {url: image},
        {url: image2},
        {url: image3}
    ];

    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 pt-5">
                        <div className="header-info shadow-sm">
                            <h1>
                                High-Quality <br/>
                                Furniture Just <br/>
                                For You
                            </h1>
                            <p>
                                Our furniture is made from selected and best quality materials that are suitable for your dream home
                            </p>
                            <Link to="products" className="header-btn">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <HeaderSlider images={slides}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;