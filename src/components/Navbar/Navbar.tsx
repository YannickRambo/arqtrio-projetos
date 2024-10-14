import { useContext } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/arqtrio-logo.jpeg";
import "./Navbar.css";

export function Navbar() {
    const { isActive, setIsActive } = useContext(ActiveContext);

    return (
        <header className="navbar">
            <Container>
                <img className="logo" src={logo} alt="ARQTrio Logo" />
                <nav className="navbarMenu">
                    <ul>
                        <li>
                            <Link className="links" to={"/arqtrio-projetos"}>Home</Link>
                        </li>
                        <li>
                            <Link className="links" to={"/arqtrio-projetos/sobre"}>Sobre Nós</Link>
                        </li>
                        <li>
                            <Link className="links" to={"/arqtrio-projetos/publico"}>Público Alvo</Link>
                        </li>
                        <li>
                            <Link className="social" to={"https://www.instagram.com/arqtrio_projetos/"}><BsInstagram /></Link>
                        </li>
                    </ul>
                </nav>
                <div className="mobileMenu">
                    <Link className="social" to={"https://www.instagram.com/arqtrio_projetos/"}><BsInstagram/></Link>
                    <button onClick={() => setIsActive(!isActive)}>
                        <IoMenu />
                    </button>
                </div>
            </Container>
        </header>
    )
}