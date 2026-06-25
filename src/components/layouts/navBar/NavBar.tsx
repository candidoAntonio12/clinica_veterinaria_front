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
                            <NavLink 
                                className={({isActive, isPending}) =>{
                                    (isPending  ? "" : (isActive ? "active" : ""))
                                }} 
                                to={"/"}
                             >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive, isPending}) =>{
                                    isPending  ? "" : (isActive ? "active" : "")
                                }} 
                                to={"/dashboard"}
                             >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive, isPending}) =>{
                                    isPending  ? "" : (isActive ? "active" : "")
                                }} 
                                to={"/tutor"}
                            >
                                Tutor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                    className={({isActive, isPending}) =>{
                                        isPending  ? "" : (isActive ? "active" : "")
                                    }}
                                    to={"/animais"}
                                >
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