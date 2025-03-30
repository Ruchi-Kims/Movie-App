import React, { useState } from "react";

export default function SearchBar({onSearch}) {

    const [searchMovie,setSearchMovie] = useState("avengers");

    const handleChange = (e) => {
      const value = e.target.value;
      setSearchMovie(value);
      onSearch(value); // On envoie la recherche au parent
    };
  return (
    <div className="mb-4 d-flex gap-4">
        <input 
        type="text"
        className='form-control'
        placeholder='Rechercher un film ...'
        value={searchMovie}
        onChange={handleChange} />

      <button className="btn btn-primary" onClick={() => onSearch(searchMovie)}>
        Rechercher
      </button>
    </div>
  )
}
