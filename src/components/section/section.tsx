import React from 'react';
import "./section.css";
import QualityPart from "./quality-part/quality-part";
import Products from "./products-part/products";
import CardsPart from "./cards-part/cards-part";
import BgPart from "./bg-part/bg-part";

function Section(): React.FC {
    return (
        <>
            <div className="container">
                <QualityPart/>
                <Products/>
                <br/><br/>
                <CardsPart/>
            </div>
            <br/>
            <BgPart/>
            <br/><br/>
        </>
    );
}

export default Section;