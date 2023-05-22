import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setTotalItems, setInitialTotalItems } from './store/actions';
import logo from './logo.png';

function App() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const maxResultsPerPage = 10;

  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.books.totalItems);
  const initialTotalItems = useSelector((state) => state.books.initialTotalItems);
  const [searched, setSearched] = useState(false);

  const handlePageReset = () => {
    setCurrentPage(1);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = () => {
    setSearchTerm(query);
    setSearched(true);
    handlePageReset();
  };

  const fetchData = useCallback(async () => {
    if (!searchTerm) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${(currentPage - 1) * maxResultsPerPage}&maxResults=${maxResultsPerPage}`
      );
      // If no items are returned, set the total items to the current item count
      if (response.data.items && response.data.items.length === 0) {
        dispatch(setTotalItems((currentPage - 1) * maxResultsPerPage));
      } else {
        dispatch(setBooks(response.data.items || [])); // Add empty array fallback
        if (!initialTotalItems) {
          dispatch(setTotalItems(response.data.totalItems));
          dispatch(setInitialTotalItems(response.data.totalItems));
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again later.');
    }
  }, [searchTerm, currentPage, initialTotalItems, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData, searchTerm, currentPage]);

  const totalPages = Math.min(Math.ceil(totalItems / maxResultsPerPage), 100);

  return (
  <Container maxWidth="md">
    <Box my={4}>
       <Box display="flex" justifyContent="center" alignItems="center" width="100%">
        <Box width="50px" height="50px" display="inline-flex" alignItems="center" justifyContent="center" style={{ marginRight: '10px' }}>
          <img src={logo} alt="Logo" width="50" height="auto" />
        </Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Book Search
        </Typography>
      </Box>
      <SearchBar handleInputChange={handleInputChange} handleSearch={handleSearch} />
      {loading && <CircularProgress style={{ marginTop: '10px' }} />}
      {error && <Typography color="error">{error}</Typography>}
      <BookList searched={searched} loading={loading} />
      <Box my={2}>
        {totalItems > 0 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                borderRadius: '50%',
                fontWeight: 'bold',
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
              '& .Mui-selected': {
                backgroundColor: 'primary.main',
              },
            }}
          />
        )}
      </Box>
      {(searched && totalItems > 0 &&
          <>
            <Typography>Total Books: {totalItems}</Typography>
            <Typography>Page {currentPage}</Typography>
          </>
        )}
    </Box>
  </Container>
);
}

export default App;
