import "./Description.css";

type DescriptionProps = {
    text: string
}

export function Description({ text }: DescriptionProps) {
    return (
        <div className="description">
            <p>{text}</p>
        </div>
    )
}