import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './MovieList.css'; // Import file CSS untuk gaya tambahan

function MovieList({ movies }) {
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    setDisplayedMovies(movies);
  }, [movies]);

  return (
    <div>
      <h1 className="movie-list-heading">Daftar Film</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {displayedMovies.map((movie, index) => (
          <Card key={index} style={{ margin: '10px', width: '300px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {movie.judul}
              </Typography>
              <Typography variant="body2" component="p">
                {movie.sinopsis}
              </Typography>
              <Typography variant="body2" component="p">
                <b>Genre: </b>
                {movie.genre.map((genre, index) => (
                  <span key={index}>
                    {genre}
                    {index !== movie.genre.length - 1 && ', '}
                  </span>
                ))}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
