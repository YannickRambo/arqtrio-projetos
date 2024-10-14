import { useContext, useEffect } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { Container } from "../../components/Container/Container"
import { Title } from "../../components/Title/Title"
import { FiTarget } from "react-icons/fi"
import { TargetItem } from "../../components/TargetItem/TargetItem";
import "./Target.css";

export function Target() {
    const { setIsActive } = useContext(ActiveContext);

    useEffect(() => {
        window.scrollTo(0,0);
        setIsActive(false);
    }, []);
    
    return (
        <section className="target">
            <Container>
                <Title title="Público Alvo" icon={<FiTarget />} />
                <ul>
                    <TargetItem title="Clientes Privados:" text="Se você é um proprietário de imóvel ou investidor buscando transformar sua visão em realidade, estamos aqui para ajudar. Seja para uma residência única, um edifício comercial ou um projeto corporativo, criamos soluções personalizadas que refletem seu estilo e valores." />
                    <TargetItem title="Empresas de Construção e Incorporadoras:" text="Trabalhamos lado a lado com construtoras e incorporadoras para desenvolver projetos que são tanto esteticamente agradáveis quanto eficientes do ponto de vista construtivo e econômico. Nosso compromisso é entregar projetos que agreguem valor e qualidade, desde o conceito inicial até a execução final." />
                    <TargetItem title="Governo e Redes Públicas:" text="Colaboramos com prefeituras, secretarias e órgãos públicos na criação de espaços urbanos que promovem o bem-estar e a qualidade de vida da população. Desde a requalificação de áreas públicas até o desenvolvimento de políticas urbanas inovadoras, nossa abordagem é sempre focada na sustentabilidade, inclusão e eficiência." />
                </ul>
            </Container>
        </section >
    )
}