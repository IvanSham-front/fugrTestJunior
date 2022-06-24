import { FETCH_SELECTED_BOOK, 
  FETCH_SELECTED_BOOK_IS_LOADING, FETCH_SELECTED_BOOK_IS_FALSE,
  SelectedBookActionTypes } from "./selectedBookType";

export const fetchSelectedBook = (selectedBook: {[x:string]: any}): SelectedBookActionTypes => {
  return {
    type: FETCH_SELECTED_BOOK,
    selectedBook
  }
}

export const fetchSelectedBookIsLoading = (isLoad: boolean): SelectedBookActionTypes => {
  return {
    type: FETCH_SELECTED_BOOK_IS_LOADING,
    isLoad
  }
}

export const fetchSelectedBookIsFalse = (isFalse: boolean): SelectedBookActionTypes => {
  return {
    type: FETCH_SELECTED_BOOK_IS_FALSE,
    isFalse
  }
}

