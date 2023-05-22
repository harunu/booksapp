
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  max-width: 600px;
  width: 80%;
  margin: auto;
  margin-top: 5rem;
`;

const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 400px; // Set a maxHeight to limit the content height
  overflow: auto; // Add scrollbar when the content exceeds maxHeight
`;

const Modal = (props) => {
  const { book, handleCloseModal } = props;

  return (
    <div
      className="modal-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <CustomCard className="modal">
        <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close" style={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        <CustomCardContent>
          <Typography variant="h5" component="h2">
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            {book.volumeInfo.subtitle}
          </Typography>
          <Typography variant="body1" component="p">
            {book.volumeInfo.authors?.join(', ')}
          </Typography>
          <Typography variant="body2" component="p">
            Published by {book.volumeInfo.publisher} on {book.volumeInfo.publishedDate}
          </Typography>
          <Typography variant="body1" component="p">
            {book.volumeInfo.description}
          </Typography>
        </CustomCardContent>
        <CardActions>
          <Button size="small" href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">
            Preview
          </Button>
        </CardActions>
      </CustomCard>
    </div>
  );
};

export default Modal;
