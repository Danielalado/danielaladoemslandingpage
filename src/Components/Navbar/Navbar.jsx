import Ems from "../../assets/Images/EMS.svg"
import Cart from "../../assets/Images/cart.svg"
import "./Navbar.css";


export default function Navbar () {
    return(
        <section id="navbar">
            {/* navbar-left starts from here */}
            <div className="navbar-logo">
                <img src={Ems} alt="" />
            </div>

            {/* navbar-middle starts from here */}
            <div className="navbar-middle">
                <a href="">Intro</a>
                <a href="">About</a>
                <a href="">Shop</a>
            </div>

            {/* navbar-right starts */}
            <div className="navbar-right">
                <img src={Cart} alt="" />
                <p className="cartCount">0</p>
            </div>
        </section>
    )
}