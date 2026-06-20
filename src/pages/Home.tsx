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
           <section className="hero-section">
                <Hero />
           </section>
        </div>    
    </>
    )
}