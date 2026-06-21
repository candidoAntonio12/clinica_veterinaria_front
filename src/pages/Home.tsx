import Card from "../components/card/Card";
import Hero from "../components/layouts/hero/Hero";
import NavBar from "../components/layouts/navBar/NavBar";
import "./Home.css"

export default function Home()
{

    return ( 
    <>
        <div>
           <section className="navbar-section">
                <NavBar />
           </section>
           <div className="container">
            <section className="hero-section">
                <Hero />
            </section>
            <section className="cards">
                    <ul className="items">
                        <li className="item-1">
                            <Card height="200px" width="300px"/>
                        </li>
                        <li className="item-1">
                            <Card height="200px" width="300px"/>
                        </li>
                        <li className="item-1">
                            <Card height="200px" width="300px"/>
                        </li>
                    </ul>
            </section>
            </div>
        </div>    
    </>
    )
}