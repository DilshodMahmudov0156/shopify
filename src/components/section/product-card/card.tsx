import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./card.css";
import {useCart} from "react-use-cart";

interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
}

interface CardProps {
    element: Product;
}

const Card: React.FC<CardProps> = ({ element }) => {

    return (
        <div className="col-xl-3 col-md-6 p-3">
            <div className="product-card">
                <img src={element.image} alt={element.title} className="w-100"/>
                <div className="text-part">
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                    <div className="d-flex">
                        <span className="price-text">$ {element.price}.00</span>
                    </div>
                </div>
                <Link to={`/products/${element.id}`} target="_blank" className="product-mask">
                    <div className="mask-container">
                        <div className="d-flex align-items-center">
                            <span className="bottom-btn">
                                <span className="mx-2">Open In New Page</span>
                                <i className="bi bi-box-arrow-in-right"></i>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;