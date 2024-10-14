import house from "../../assets/casa.jpeg";
import kitchen from "../../assets/cozinha.jpeg";
import city from "../../assets/cidade.jpeg";
import mainRoom from "../../assets/quarto-principal.jpeg";
import room from "../../assets/quarto.jpeg";
import livingRoom from "../../assets/sala-de-estar.jpeg";
import "./Projects.css";

export function Projects() {
    return (
        <div className="projects">
            <figure className="house">
                <img src={house} alt="" />
            </figure>
            <figure className="kitchen">
                <img src={kitchen} alt="" />
            </figure>
            <figure className="city">
                <img src={city} alt="" />
            </figure>
            <figure className="mainRoom">
                <img src={mainRoom} alt="" />
            </figure>
            <figure className="livingRoom">
                <img  src={livingRoom} alt="" />
            </figure>
            <figure className="room">
                <img src={room} alt="" />
            </figure>
        </div>
    )
}