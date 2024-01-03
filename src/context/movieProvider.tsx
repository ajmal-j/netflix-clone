import { ReactNode, createContext, useContext, useState } from "react";
import { reactState } from "../types/types";

type ContextType = {
  movieTitle: string;
  setMovieTitle: reactState<string>;
  divId: string;
  setDivId: reactState<string>;
};

const MovieContext = createContext<ContextType | undefined>(undefined);

const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [divId, setDivId] = useState<string>("");

  return (
    <MovieContext.Provider
      value={{ movieTitle, setMovieTitle, divId, setDivId }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = (): ContextType => {
  const context = useContext<ContextType | undefined>(MovieContext);
  if (!context) throw new Error("Context is undefined");
  return context;
};

export { MovieProvider, useMovie };
