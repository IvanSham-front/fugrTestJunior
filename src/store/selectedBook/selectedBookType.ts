export const FETCH_SELECTED_BOOK = 'SELECT_BOOK';
export const FETCH_SELECTED_BOOK_IS_LOADING = 'FETCH_SELECTED_BOOK_IS_LOADING';
export const FETCH_SELECTED_BOOK_IS_FALSE = 'FETCH_SELECTED_BOOK_IS_FALSE';

export interface ISelectedBook {
  selectedBook: {[x:string]: any},
  isLoad: boolean,
  isFalse: boolean
}

interface IFetchSelectedBook {
  type: typeof FETCH_SELECTED_BOOK,
  selectedBook: {[x:string]: any}
}

interface IFetchSelectedBookIsLoading {
  type: typeof FETCH_SELECTED_BOOK_IS_LOADING,
  isLoad: boolean,
}

interface IFetchSelectedBookIsFalse {
  type: typeof FETCH_SELECTED_BOOK_IS_FALSE,
  isFalse: boolean
}

export type SelectedBookActionTypes = IFetchSelectedBook | IFetchSelectedBookIsLoading | IFetchSelectedBookIsFalse;