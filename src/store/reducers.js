import {
  SET_QUERY,
  SET_BOOKS,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_PAGE,
  SET_TOTAL_ITEMS,
  SET_INITIAL_TOTAL_ITEMS,
} from './actions';

import {
  SELECT_BOOK,
  CLOSE_MODAL,
  SET_SORT_ORDER,
} from './actions/bookActions';

const initialState = {
  query: '',
  books: [],
  loading: false,
  error: '',
  selectedBook: null,
  sortOrder: 'relevance',
  currentPage: 1,
  totalItems: 0,
  initialTotalItems: 0,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.payload,
      };
    case SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        selectedBook: null,
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case SET_INITIAL_TOTAL_ITEMS:
      return {
        ...state,
        initialTotalItems: action.reset ? 0 : action.payload,
      };

      default:
        return state;
    }
  };

  export default booksReducer;
