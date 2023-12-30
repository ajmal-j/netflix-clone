import React from "react";

export type titles =
  | "Popular"
  | "Top Rated"
  | "Trending"
  | "Horror"
  | "Upcoming";

export type reactState<T> = React.Dispatch<React.SetStateAction<T>>;
