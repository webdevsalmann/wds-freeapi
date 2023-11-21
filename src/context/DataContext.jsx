import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const [projectId, setProjectId] = useState(0);

    const contextValues = {
        projectId,
        setProjectId
    }
    return (
        <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>
    )
}

export default function useData() {
    return useContext(DataContext);
}
