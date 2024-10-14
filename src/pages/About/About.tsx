import { useContext, useEffect } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { GrGroup } from "react-icons/gr";
import { Description } from "../../components/Description/Description";
import { People } from "../../components/People/People";
import "./About.css";

export function About() {
    const { setIsActive } = useContext(ActiveContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false);
    }, []);

    return (
        <section className="about">
            <Container>
                <Title title="Sobre Nós" icon={<GrGroup />} />
                <Description text="Somos um trio de arquitetas apaixonadas pela arte de projetar e pelo impacto que a arquitetura pode ter nas pessoas e nas cidades. Combinamos criatividade, técnica e uma visão humanizada para entregar projetos que não apenas atendem aos requisitos técnicos, mas também capturam a essência do lugar e das pessoas que irão ocupá-lo." />
                <People />
            </Container >
        </section >
    )
}