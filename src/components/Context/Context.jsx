import { createContext, useState } from "react";





export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [modal, showModal] = useState(false);

    return (
        <MyContext.Provider value={{ modal, showModal }}>
            {children}
        </MyContext.Provider>
    );
};