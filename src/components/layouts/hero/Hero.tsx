import Button from "../../ui/button/button";
import Thor from "../../ui/ilustration/Thor";
import "./Hero.css"

export default function Hero()
{

    return (
        <>
            <div className="hero">
                <section className="hero-Content">
                    <div className="hero-title">
                        <h1>Cuidado Veterinario Com Carinho e Dedicação</h1>
                        <h4>
                            Consultas, Vacinação e exames para o seu melhor
                            melhor amigo, em um ambiente acolhedor e profissional
                        </h4>
                    </div>
                    <div className="hero-action">
                        <Button 
                            width="150px"
                            height="40px"
                            text="Cadastrar tutor"
                        />
                        <Button 
                            width="150px" 
                            height="40px"
                            text="Saiba mais"
                            style="button-secondary"
                        />
                    </div>
                </section>
                <section className="hero-ilustration">
                    <Thor width="400px" height="400px" />
                </section>
            </div>
        </>
    )
}