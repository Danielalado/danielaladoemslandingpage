import Ems from "../../assets/Images/EMS.svg"
import Cart from "../../assets/Images/cart.svg"
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar () {
    return(
        <section id="navbar">
            {/* navbar-left starts from here */}
            <div className="navbar-logo">
                <a href="/"><img src={Ems} alt="" /></a>
                
            </div>

            {/* navbar-middle starts from here */}
            <div className="navbar-middle">
                <a href="#hero">Intro</a>
                <a href="#about">About</a>
                <a href="#gadgets">Shop</a>
            </div>

            {/* navbar-right starts */}
            <div className="navbar-right">
                <Link to="/cart">
                    <div className="navbar_right_items">
                        <img src={Cart} alt="" />
                        <p className="cartCount">0</p>
                    </div>
                    
                </Link>
               
            </div>
        </section>
    )
}