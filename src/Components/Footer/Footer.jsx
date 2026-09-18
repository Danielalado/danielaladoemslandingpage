


import EMSlogo from "../../assets/Images/EMS.svg"
import "./Footer.css"

export default function Footer () {
    return(
        <section id="footer">
                <div className="footer-left">
                    <img src={EMSlogo} alt="" />
                </div>

                <div className="footer-right">
                    <p>Design and Crafted by Daniel Alado &copy; 2026 with love and passion. All rights reserved</p>
                </div>

        </section>
    )
}