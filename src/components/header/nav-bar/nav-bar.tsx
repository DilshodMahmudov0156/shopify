import React from 'react';
import "./navbar.css";
import NavDropdown from "../../../ui-components/nav-dropdown/nav-dropdown";
import {useCart} from "react-use-cart";
import { Link } from "react-router-dom";

function NavBar(): React.FC {

    const { totalUniqueItems } = useCart();
    return (
        <nav className="d-flex justify-content-center">
            <div className="container nav-container d-flex align-items-center">
                <Link to="/" className="logo">
                    Funiro.
                </Link>

                <div className="nav-left">
                    <ul className="links">
                        <NavDropdown>Products</NavDropdown>
                        <NavDropdown>Rooms</NavDropdown>
                        <span className="my-nav-link">Inspirations</span>
                    </ul>
                    <div className="my-input-group">
                        <button className="search-icon">
                            <i className="bi bi-search"></i>
                        </button>
                        <input type="text" placeholder="Search for minimalist chair" className="search-input"/>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="nav-btn">
                        <Link to="/" className="text-dark">
                            <i className="bi bi-heart"></i>
                        </Link>
                        <span className="badge">
                        </span>
                    </button>
                    <button className="nav-btn">
                        <Link to="/cart" className="text-dark">
                            <i className="bi bi-cart3"></i>
                        </Link>
                        <span className="badge">
                            {totalUniqueItems? totalUniqueItems: null}
                        </span>
                    </button>
                    <button className="profile-btn">
                        <i className="bi bi-person-fill"></i>
                        {/*<img src="https://lh3.googleusercontent.com/a/ACg8ocIjO_DHjPlAvd_jvj0VzzD_fJs-14zCL2myjJke5JqM5UoyGg=s83-c-mo" alt="" className="w-100"/>*/}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;