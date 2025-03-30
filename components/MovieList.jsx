import React, { useState,useEffect } from 'react'
import MovieCard from './MovieCard';



export default function MovieList({ searchMovie }) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true) // etat pour gerer le chargement
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("")

  useEffect(()=>{
    async function fetchMovies() {
      setLoading(true); // Active le loader avant de récupérer les films
        try {
             let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=417b8b6fabaf78c8d5ca26577870609c`);
             let data = await response.json();  // Convertir JSON
             setMovies(data.results || []);
        } catch (error) {
            console.error("Erreur:", error);
        }
        finally{
          setLoading(false); // Désactive le loader après le chargement
        }
        
    }

    async function fetchGenres() {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=417b8b6fabaf78c8d5ca26577870609c`
        );
        let data = await response.json();
        setGenres(data.genres || []);

        
      } catch (error) {
        console.error("Erreur chargement des genres:", error);
        
      }
      
    }
    fetchMovies();
    fetchGenres();
},[])

    // Filtrer les films en fonction de searchMovie et du genre sélectionné
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase()) &&
    (selectedGenre === "" || movie.genre_ids.includes(parseInt(selectedGenre))) // Filtrage par genre
  );

  return (
    <div>

      {/* Menu déroulant pour choisir un genre */}
      <div className="mb-3">
        <select
          className="form-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tous les genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

    <div className="row">
      {loading ? ( // Affichage du loader si les films sont en cours de chargement
         <div className="spinner-border text-primary" role="status">
         <span className="visually-hidden">Chargement des films...</span>
       </div>
      ) :  filteredMovies.length > 0 ?(
        filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="text-center w-100 text-danger">Aucun film trouvé.</p>
      )}
    </div>
    </div>

  )
}
