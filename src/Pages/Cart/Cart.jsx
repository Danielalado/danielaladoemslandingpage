import "./Cart.css";

export default function Cart () {
    return(
        <section id="cart" className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Items Name</p>
                    <p>Price</p>
                    <p>Quality</p>
                    <p>Total</p>
                    <p>Remove / Add</p>
                </div>
                <br />
                <hr />
            </div>

            
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>

                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>GHS</p>
                            {/* <p>GHS {getTotalCartAmount()}</p> */}
                        </div>

                        <hr />

                         <div className="cart-total-details">
                            <p>Delivery</p>
                            <p>GHS</p>
                            {/* <p>GHS {getTotalCartAmount() === 0 ? 0 : 10}</p> */}
                        </div>
                        
                        <hr />

                         <div className="cart-total-details">
                            <p>Total</p>
                            <p>GHS</p>
                            {/* <p>
                                GHS {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 0}
                            </p> */}
                        </div>
                        
                    </div>

                    <button>
                        Proced To Payment
                    </button>

                    {/* <button onClick={() => navigateToPlaceorder()}>
                        Proced To Checkout
                    </button> */}
                </div>

                {/* <div className="cart-promocode">
                    <div>
                        <p>Enter promo code here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}