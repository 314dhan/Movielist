import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import movieData from './data/list.json';

function App() {
  const [movies] = useState(movieData);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleGenreChange = (selectedGenre) => {
    if (selectedGenre === "All Genres") {
      // Jika dipilih "All Genres", tampilkan semua film
      setFilteredMovies([]);
    } else {
      // Filter film berdasarkan genre yang dipilih
      const filtered = movieData.filter(movie =>
        movie.genre.includes(selectedGenre)
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="App">
      <Navbar handleGenreChange={handleGenreChange} />
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
    </div>
  );
}

export default App;
