import React, {useEffect} from 'react';
import {useCart} from "react-use-cart";
import {Link} from "react-router-dom";
import "./cart.css";
import NavBar from "../components/header/nav-bar/nav-bar";
import empty from "../images/cart-bg.svg";

function CartPage() {

    const { isEmpty, items, updateItemQuantity, removeItem } = useCart();

    let totalPrice = 0;
    for(let idx in items){
        totalPrice += items[idx].price * items[idx].quantity;
    }

    return (
        <div className="cart-body">
            <NavBar/>
            <h2 className="text-center mt-3">Mt-Cart</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        isEmpty?
                            <div className="col-xl-4 col-lg-5 col-sm-8 col-10">
                                <h3 className="text-center text-danger">Cart is empty!</h3>
                                <img src={empty} alt="" className="w-100"/>
                            </div>
                            :
                            <div className="col-xl-7">
                                <h2 className="text-center text-warning">
                                    Your Total Price
                                </h2>
                                <div className="d-flex mt-4">
                                    <button className="buy-btn mt-0">
                                        Purchase
                                    </button>
                                    <h3>$ {totalPrice}.00</h3>
                                </div>
                                <table className="table my-3">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Other</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        items.map((element) => {
                                            return(
                                                <tr>
                                                    <td>
                                                        <div className="cart-image border">
                                                            <img src={element.image} alt="" className=" w-100"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-2">
                                                            <Link to={`/products/${element.id}`} className="text-dark">
                                                                {element.title}
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted">{element.description}</p>
                                                        <h5 className="text-success">
                                                            $ {element.price}
                                                        </h5>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button
                                                                className="btn btn-success mx-0"
                                                                onClick={() => {
                                                                    updateItemQuantity(element.id, (element.quantity ?? 0) - 1)
                                                                }}
                                                            >
                                                                -
                                                            </button>
                                                            <button className="btn mx-0">
                                                                {element.quantity}
                                                            </button>
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => {
                                                                    updateItemQuantity(element.id, (element.quantity ?? 0) + 1)
                                                                }}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-dark mx-0" onClick={() => removeItem(element.id)}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CartPage;