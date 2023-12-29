import { createContext, useContext, useState } from "react";

const MovieContext = createContext(undefined);

// @ts-ignore
const MovieProvider = ({ children }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [divId, setDivId] = useState("");

  return (
    // @ts-ignore
    <MovieContext.Provider value={{ movieTitle, setMovieTitle ,divId ,setDivId }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovie must be used within a MovieProvider");
  }

  return context;
};

export { MovieProvider, useMovie };
