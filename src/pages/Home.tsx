import Card from "../components/card/Card";
import Hero from "../components/layouts/hero/Hero";
import NavBar from "../components/layouts/navBar/NavBar";
import "./Home.css"
import exam  from "../assets/exam-time.png"
import vacine from "../assets/vacination.png"
import consulte from "../assets/online-doctor.png"


export default function Home()
{
    const descriptionConsulta = "Exame Clinico para Cães e gatos com historico sempre presente na ficha do animal";
    const descriptionVacinacao = "Calendario de vacina acompanhado de perto, com lembrete automatico do proximo reforço";
    const descriptionExame = "Resultados laboratorios rápidos e confiaveis";

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
                        <li className="item item-1">
                            <Card 
                                title="Consultas"
                                header="Avaliação"  
                                description={descriptionConsulta}
                                src={consulte}
                            />
                        </li>
                        <li className="item item-2">
                            <Card 
                                title="Vacinaçao" 
                                header="Prevenção" 
                                description={descriptionVacinacao}
                                src={vacine}
                            />
                        </li>
                        <li className="item item-3">
                            <Card
                                title="Exames" 
                                header="Diagnostico" 
                                description={descriptionExame}
                                src={exam}
                            />
                        </li>
                    </ul>
            </section>
            </div>
        </div>    
    </>
    )
}