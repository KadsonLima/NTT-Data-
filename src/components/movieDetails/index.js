import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie);

  if (movie.loading) {
    return <div>Carregando...</div>;
  }

  if (movie.error) {
    return <div>Erro: {movie.error}</div>;
  }

  if (!movie.data) {
    return <div>Nenhum filme encontrado.</div>;
  }

  console.log(movie)

  return (
    <div>
      <h1>{movie.data.Title}</h1>
      <p>{movie.data.Plot}</p>
      <p>Diretor: {movie.data.Director}</p>
      <p>Ano: {movie.data.Year}</p>
    </div>
  );
};

export default MovieDetails;
