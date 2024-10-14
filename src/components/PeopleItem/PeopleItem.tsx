import "./PeopleItem.css";

type PeopleItemProps = {
    image: string,
    name: string,
    tasks: string[]
}

export function PeopleItem({ image, name, tasks }: PeopleItemProps) {
    return (
        <div className="peopleItem">
            <figure className="peopleItemImage">
                <img src={image} alt="" loading="lazy"/>
            </figure>
            <ul>
                <h1>{name}</h1>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </div>
    )
}