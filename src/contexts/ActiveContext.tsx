import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IActiveContext {
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const defaultContext = {
    isActive: false,
    setIsActive: () => { }
} as IActiveContext;

export const ActiveContext = createContext(defaultContext);

type ActiveProviderProps = {
    children: ReactNode,
}

export function ActiveProvider({ children }: ActiveProviderProps) {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <ActiveContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </ActiveContext.Provider>
    )
}