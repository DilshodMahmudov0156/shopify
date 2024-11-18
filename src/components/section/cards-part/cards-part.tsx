import React from 'react';
// import img1 from "../../images/Reactangle1.jpg"
import img1 from "../../../images/Rectangle1.jpg";
import img2 from "../../../images/Rectangle2.jpg";
import img3 from "../../../images/Rectangle3.jpg";

function CardsPart() {
    return (
        <div>
            <h1 className="text-center mt-3">Tips & Tricks</h1>
            <div className="row my-5">
                <div className="col-xl-4 col-sm-6 p-3">
                    <div className="my-card shadow-lg">
                        <img src={img1} alt="" className="w-100"/>
                        <div className="p-4">
                            <h4>How to create a living room to love</h4>
                            <p className="text-muted">20 jan 2020</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 p-3">
                    <div className="my-card shadow-lg">
                        <img src={img2} alt="" className="w-100"/>
                        <div className="p-4">
                            <h4>Solution for clean look working space</h4>
                            <p className="text-muted">10 jan 2020</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 p-3">
                    <div className="my-card shadow-lg">
                        <img src={img3} alt="" className="w-100"/>
                        <div className="p-4">
                            <h4>Make your cooking activity more fun with good setup</h4>
                            <p className="text-muted">20 jan 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsPart;