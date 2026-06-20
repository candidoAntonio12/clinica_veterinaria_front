import { NavLink } from "react-router";
import Button from "../../ui/button/button";
import Logo from "../../image/logo/logo";
import "./NaBar.css"

export default function NavBar()
{

    return (
        <>
           <nav className="navbar">
            <Logo width="200px" height="60px" />
            <section>
                    <ul>
                        <li>
                            <NavLink to={"/home"} >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard"}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/tutor"}>
                                Tutor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/animais"}>
                                Animais
                            </NavLink>
                        </li>
                    </ul>
                </section>
                <Button text="Agendar Consulta" width="200px" height="40px" />               
           </nav>
        </>
    )
}