import { ReactNode } from "react"
import "./Title.css";

type TitleProps = {
    title: string,
    icon?: ReactNode,
    desktop?: boolean
}

export function Title({ title, icon, desktop }: TitleProps) {
    return (
        <div className={desktop ? "titleContainer mobile" : "titleContainer"}>
            {icon}
            <h1>{title}</h1>
        </div>
    )
}