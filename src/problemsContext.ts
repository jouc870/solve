import { createContext, Dispatch, SetStateAction } from "react";
import { Problem } from "./problem";

export type contextType = {
    problems: Problem[];
    filteredProblems: Problem[];
    setFilteredProblems: (problems: Problem[])=>void;
}

export const problemsContext = createContext<contextType | undefined>(undefined);