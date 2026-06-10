import Gadget1 from "../../assets/Images/product1.png"
import Gadget2 from "../../assets/Images/product2.png"
import Gadget3 from "../../assets/Images/product3.png"
import Gadget4 from "../../assets/Images/product4.png"
import Gadget5 from "../../assets/Images/product5.png"
import Gadget6 from "../../assets/Images/product6.png"

import "./Gadget.css"


export default function Gadgets () {
    return(
        <section id="gadgets">
            <div className="gadgets-title">
                <h1>OUR GADGETS</h1>
            </div>

            <div className="gadgets">
                <div className="gadget">
                    <img src={Gadget1} alt="" />
                    <h3 className="gadget-name">SAMSUNG TV</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>

                <div className="gadget">
                    <img src={Gadget2} alt="" />
                    <h3 className="gadget-name">PIXEL 4a</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>

                <div className="gadget">
                    <img src={Gadget3} alt="" />
                    <h3 className="gadget-name">PS 5</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>

                <div className="gadget">
                    <img src={Gadget4} alt="" />
                    <h3 className="gadget-name">MACBOOK AIR</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>

                <div className="gadget">
                    <img src={Gadget5} alt="" />
                    <h3 className="gadget-name">APPLE WATCH</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>

                <div className="gadget">
                    <img src={Gadget6} alt="" />
                    <h3 className="gadget-name">AIR PODS</h3>
                    <a href=""><h5 className="add-cart">ADD TO CART</h5></a>
                </div>



            </div>
        </section>
    )
}