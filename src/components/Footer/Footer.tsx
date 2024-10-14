import { Container } from "../Container/Container";
import logoUniRitter from "../../assets/logo-uniritter.png";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div>
                    <p><span>Matéria:</span> Práticas Profissionais</p>
                    <p><span>Professora:</span> Érica Dall'asta</p>
                    <p><span>Alunas do Projeto:</span> Jéssica Silveira, Manuella Klein e Bibiana Lourenço</p>
                </div>
                <div className="logoUniRitter">
                    <img src={logoUniRitter} alt="" />
                </div>
            </Container>
        </footer>
    );
}