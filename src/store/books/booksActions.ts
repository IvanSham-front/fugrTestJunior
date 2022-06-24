import { FETCH_BOOKS, NEXT_PAGE_BOOKS, 
  FETCH_BOOKS_IS_FALSE, FETCH_BOOKS_IS_LOADING, 
  BooksActionTypes } from './booksTypes';

export const fetchBooks = (items: Array<any>, totalItems: number):
  BooksActionTypes => {
    return {
      type: FETCH_BOOKS,
      items,
      totalItems
    }
}

export const nextPageBook = (items: Array<any>): BooksActionTypes => {
  return {
    type: NEXT_PAGE_BOOKS,
    items
  }
}

export const fetchBooksIsLoading = (isLoad: boolean): BooksActionTypes => {
  return {
    type: FETCH_BOOKS_IS_LOADING,
    isLoad
  }
}

export const fetchBooksIsFalse = (isFalse: boolean): BooksActionTypes => {
  return {
    type: FETCH_BOOKS_IS_FALSE,
    isFalse
  }
}