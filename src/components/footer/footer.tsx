
function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="border border-top mb-4 mt-4"></div>
                <div className="row">
                    <div className="col-xl-3 mt-3">
                        <h4>Funiro.</h4>
                        <p className="text-muted mt-2">
                            Worldwide furniture store since 2020. We sell <br/> over 1000+ branded products on our website
                        </p>
                        <p className="text-muted">
                            <i className="bi bi-geo-alt-fill"></i> Sawojajar Malang, Indonesia
                        </p>
                        <p className="text-muted">
                            <i className="bi bi-telephone-fill"></i> +6289 456 3455
                        </p>
                        <a href="" className="text-muted">
                            www.funiro.com
                        </a>
                    </div>
                    <div className="col-xl-2 mt-3">
                        <h4>Menu</h4>
                        <p className="text-muted">Products</p>
                        <p className="text-muted">Rooms</p>
                        <p className="text-muted">Inspirations</p>
                        <p className="text-muted">About Us</p>
                        <p className="text-muted">Terms & Policy</p>
                    </div>
                    <div className="col-xl-2 mt-3">
                        <h4>Account</h4>
                        <p className="text-muted">My Account</p>
                        <p className="text-muted">Checkout</p>
                        <p className="text-muted">My Cart</p>
                        <p className="text-muted">My catalog</p>
                    </div>
                    <div className="col-xl-2 mt-3">
                        <h4>Stay Connected</h4>
                        <p className="text-muted">Facebook</p>
                        <p className="text-muted">Instagram</p>
                        <p className="text-muted">Twitter</p>
                    </div>
                    <div className="col-xl-3 mt-3">
                        <h4>Stay Updated</h4>
                        <div className="d-flex align-items-center">
                            <input type="text"/>
                            <button className="submit-btn">
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;