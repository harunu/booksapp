import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook, closeModal } from '../store/actions/bookActions';
import styles from '../styles/Booklist.module.css';
import SortSelector from './SortSelector';
import { Button as MuiButton, Box, Typography } from '@mui/material';


function BookList({ searched , loading }) {
  const books = useSelector((state) => state.books.books);
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const sortOrder = useSelector((state) => state.books.sortOrder);
  const dispatch = useDispatch();
  const [localSearched, setLocalSearched] = useState(false);

  const handleSelectBook = (book) => {
    dispatch(selectBook(book));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const sortByRelevance = (a, b) => {
    const aRating = a.volumeInfo.averageRating || 0;
    const bRating = b.volumeInfo.averageRating || 0;
    const aRatingsCount = a.volumeInfo.ratingsCount || 0;
    const bRatingsCount = b.volumeInfo.ratingsCount || 0;
    return (bRating * bRatingsCount - aRating * aRatingsCount) || (bRating - aRating);
  };

  const sortByDateAsc = (a, b) => {
    return new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate);
  };

  const sortByDateDesc = (a, b) => {
    return new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate);
  };

  const sortFunction = {
    relevance: sortByRelevance,
    date_asc: sortByDateAsc,
    date_desc: sortByDateDesc,
  };

  const sortedBooks = [...books].sort(sortFunction[sortOrder]);

  useEffect(() => {
    if (books.length > 0) {
      setLocalSearched(true);
    }
  }, [books]);


// Update the condition for displaying the "No books to display" message

if (books.length === 0 && localSearched && !loading) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
      width="100%"
    >
      <Typography variant="h5" color="error">
        No books to display
      </Typography>
    </Box>
  );
}
  return (
    <div>
      {searched && books.length > 0 && (
        <div className={styles.sortContainer}>
          <SortSelector />
        </div>
      )}
    {sortedBooks.map((book) => (
      <div key={book.id} className={styles.bookContainer}>
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
           {book.volumeInfo.imageLinks && (
         <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MuiButton
            className="view-details-button"
            variant="contained"
            color="primary"
            onClick={() => handleSelectBook(book)}
            size="small"
            >
            View Details
            </MuiButton>
            {selectedBook && selectedBook.id === book.id && (
              <Modal book={selectedBook} handleCloseModal={handleCloseModal} />
            )}
          </div>
        </div>
      </div>
    ))}

  </div>
  );
}

export default BookList;

