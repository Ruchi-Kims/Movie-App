import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            <small className="text-muted">Sortie : {movie.release_date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}


