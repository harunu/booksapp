
import React from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ handleInputChange, handleSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        label="Search for books"
        variant="outlined"
        style={{ marginRight: '10px', width: '400px' }}
        InputProps={{
          style: { borderRadius: '4px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
        }}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchBar;

