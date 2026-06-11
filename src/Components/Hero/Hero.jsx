import HeroImage from "../../assets/Images/heroImage.png"



import "./Hero.css"

export default function Hero () {
    return(
        <section id="hero">
            <div className="hero">
                <div className="hero-left">
                    <h1>THE</h1>
                    <h1>E-MILLENIAL</h1>
                    <h1>STORE</h1>
                </div>

                <div className="hero-right">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
           

            <div className="hero-bottom">
                <a href="#gadgets"><p className="shopNow">SHOP NOW</p></a>
            </div>

        </section>
        
    )
}