import { useContext } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { Container } from "../Container/Container";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
    const { isActive, setIsActive } = useContext(ActiveContext);

    return (
        <aside className={isActive ? "sidebar active" : "sidebar"}>
            <header className="sidebarHeader">
                <Container>
                    <h1>ARQTrio - Projetos</h1>
                    <button onClick={() => setIsActive(!isActive)}><IoClose /></button>
                </Container>
            </header>
            <ul className="sidebarMenu">
                <Container>
                    <li>
                        <Link className="sidebarMenuLinks" to={"/"}>Home</Link>
                        <Link className="sidebarMenuLinks" to={"/sobre"}>Sobre Nós</Link>
                        <Link className="sidebarMenuLinks" to={"/publico"}>Público Alvo</Link>
                    </li>
                </Container>
            </ul>
        </aside>
    )
}