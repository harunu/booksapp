
export const SET_QUERY = 'SET_QUERY';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_INITIAL_TOTAL_ITEMS = 'SET_INITIAL_TOTAL_ITEMS';

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage
});

export const setTotalItems = (totalItems) => ({
  type: SET_TOTAL_ITEMS,
  payload: totalItems
});

export function setInitialTotalItems(initialTotalItems) {
  return {
    type: SET_INITIAL_TOTAL_ITEMS,
    payload: initialTotalItems,
    reset: initialTotalItems === null,
  };
}
