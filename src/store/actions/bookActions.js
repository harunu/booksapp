
export const SELECT_BOOK = 'SELECT_BOOK';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function setSortOrder(sortOrder) {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder,
  };
}
