import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

function Navbar({ handleGenreChange }) {
  const genres = ["All Genres", "Action", "Adventure", "Drama", "Sci-Fi", "Thriller", "Mystery", "War", "Fantasy"];

  const handleGenreSelect = (genre) => {
    handleGenreChange(genre);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {genres.map((genre, index) => (
            <Button 
              key={index} 
              color="inherit" 
              style={{ marginRight: '10px' }}
              onClick={() => handleGenreSelect(genre)}
            >
              {genre}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;