import { PeopleItem } from "../PeopleItem/PeopleItem";
import tauane from "../../assets/tauane.jpeg";
import manu from "../../assets/manu.jpeg";
import bibiane from "../../assets/bibiane.jpeg";
import "./People.css";

export function People() {
    return (
        <section className="people">
            <PeopleItem image={tauane} name="Tauane Silveira" tasks={["Planejamento Estratégico", "Relacionamento com o cliente", "Conformidade legal e regulamentos"]} />
            <PeopleItem image={manu} name="Manuella Klein" tasks={["Planejamento Estratégico", "Gestão Financeira", "Desenvolvimento de Negócios"]} />
            <PeopleItem image={bibiane} name="Bibiana Lourenço" tasks={["Desenvolvimento de Negócios", "Relacionamento com o cliente"]} />
        </section>
    )
}