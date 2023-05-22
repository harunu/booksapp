
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../store/actions/bookActions';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SortSelector() {
  const sortOrder = useSelector((state) => state.books.sortOrder);
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center" marginBottom="10px" marginTop="10px">
      <FormControl>
        <InputLabel htmlFor="sort-by-select">Sort by</InputLabel>
        <Select
          labelId="sort-by-select"
          id="sort-by-select"
          value={sortOrder}
          onChange={(event) => dispatch(setSortOrder(event.target.value))}
          label="Sort by"
          sx={{ width: '300px' }} // Set a fixed width for the dropdown
        >
          <MenuItem value="relevance">Relevance</MenuItem>
          <MenuItem value="date_asc">Publication Date (Ascending)</MenuItem>
          <MenuItem value="date_desc">Publication Date (Descending)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortSelector;
