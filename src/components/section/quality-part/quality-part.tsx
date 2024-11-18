import React from 'react';
import "./quality.css";
import image from "../../../images/Vector.png";
import image1 from "../../../images/Vector1.png";
import image2 from "../../../images/Vector2.png";
import image3 from "../../../images/Vector3.png";

function QualityPart(): React.FC {
    return (
        <div className="row my-5">
            <div className="col-lg-3 col-6">
                <div className="quality-card">
                    <img src={image} alt="" className="quality-icon"/>
                    <div className="text-part">
                        <h4>High Quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="quality-card">
                    <img src={image1} alt="" className="quality-icon"/>
                    <div className="text-part">
                        <h4>Warrany Protection</h4>
                        <p>Over 2 years</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="quality-card">
                    <img src={image2} alt="" className="quality-icon"/>
                    <div className="text-part">
                        <h4>Free Shipping</h4>
                        <p>Order over 150 $</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="quality-card">
                    <img src={image3} alt="" className="quality-icon"/>
                    <div className="text-part">
                        <h4>24 / 7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QualityPart;