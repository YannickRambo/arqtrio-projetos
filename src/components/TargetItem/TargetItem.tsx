import "./TargetItem.css";

type TargetItemProps = {
    title: string,
    text: string
}

export function TargetItem({ title, text }: TargetItemProps) {
    return (
        <li className="targetItem">
            <h3><span>{title}</span></h3>
            <p>{text}</p>
        </li>
    )
}