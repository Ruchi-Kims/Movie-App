import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

export default function App() {
  const [searchMovie, setSearchMovie] = useState("avengers");

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Movie App</h1>
      <SearchBar onSearch={setSearchMovie} />
      <MovieList searchMovie={searchMovie} />
    </div>
  );  
}

