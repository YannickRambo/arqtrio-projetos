import { useContext, useEffect } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { BiBuildingHouse } from "react-icons/bi";
import { Description } from "../../components/Description/Description";
import { Projects } from "../../components/Projects/Projects";
import "./Home.css";
import { PiPencilRuler } from "react-icons/pi";

export function Home() {
    const { setIsActive } = useContext(ActiveContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false);
    }, []);

    return (
        <section className="home">
            <Container>
                <Title title="ARQTrio Projetos - Transformando Ideias em Realidade Urbana e Arquitetônica!" icon={<BiBuildingHouse />} desktop={true} />
                <div className="mobileTitle">
                    <Title title="ARQTrio Projetos" icon={<BiBuildingHouse />} />
                </div>
                <Description text="Na ARQTrio Projetos, acreditamos que cada espaço conta uma história e que cada projeto tem o potencial de transformar vidas e paisagens. Somos um escritório de arquitetura dedicado a criar soluções inovadoras, funcionais e sustentáveis, que atendem às necessidades específicas de nossos clientes e parceiros." />
                <Title title="Projetos" icon={<PiPencilRuler />} />
                <Projects />
            </Container>
        </section>
    );
}