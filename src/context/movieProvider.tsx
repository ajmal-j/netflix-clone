import { ReactNode, createContext, useContext, useState } from "react";

const MovieContext = createContext(undefined);

const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [divId, setDivId] = useState("");

  return (
    <MovieContext.Provider
      // @ts-ignore
      value={{ movieTitle, setMovieTitle, divId, setDivId }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);
  return context;
};

export { MovieProvider, useMovie };
