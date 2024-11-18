import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {useStore} from "../store/index";
import NavBar from "../components/header/nav-bar/nav-bar";
import Products from "../components/section/products-part/products";
import ReactImageMagnify from 'react-image-magnify';
import QualityPart from "../components/section/quality-part/quality-part";
import {useCart} from "react-use-cart";
import {Link} from "react-router-dom";

function ProductPage() {
    // const [product, setProduct] = useState({});
    const {id} = useParams();
    const {products} = useStore();
    const existProduct = products.find(product => product.id === id && product);
    const {addItem} = useCart();

    return (
        <div className="product-page">
            <NavBar/>
            <div className="container mt-5">
                {/*<h2 className="text-center">product id is: {id}</h2>*/}
                <div className="row pt-4">
                    {
                        existProduct?
                            <>
                                <div className="col-xl-5     col-md-6">
                                    <div className="d-flex w-100">
                                        <div className="small-image">
                                            <img src={existProduct.image} alt="" className="img-fluid mb-3"/>
                                        </div>
                                        <img src={existProduct.image} alt="" className="w-100 mx-3"/>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-6">
                                    <div className="my-3">
                                        <h3>{existProduct.title}</h3>
                                        <p className="text-secondary">{existProduct.fullDescription}</p>
                                        <h1 className="text-dark">$ {existProduct.price}.00</h1>
                                        <div className="d-flex align-items-center">
                                            <Link to="/" className="buy-btn">
                                                <span className="buying-text">
                                                    One Click Purchuase
                                                </span>
                                                <span className="buying-icon">
                                                    <i className="bi bi-check2-circle"></i>
                                                </span>
                                            </Link>
                                            <button className="add-btn" onClick={() => addItem(existProduct)}>
                                                <span className="buying-text">
                                                    Add To Cart
                                                </span>
                                                <span className="buying-icon">
                                                    <i className="bi bi-cart4"></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <span className="star-icon">
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                            <span className="star-icon">
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                            <span className="star-icon">
                                                <i className="bi bi-star"></i>
                                            </span>
                                            <span className="star-icon">
                                                <i className="bi bi-star"></i>
                                            </span>
                                            <span className="star-icon">
                                                <i className="bi bi-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <h2 className="text-center text-danger">product: {id} is not defined!</h2>
                    }

                    <div className="border-bottom border-secondary mt-5"></div>
                    <QualityPart/>
                    <Products/>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;