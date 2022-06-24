export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_IS_LOADING = 'FETCH_BOOKS_IS_LOADING';
export const FETCH_BOOKS_IS_FALSE = 'FETCH_BOOKS_IS_FALSE';
export const NEXT_PAGE_BOOKS = 'NEXT_PAGE_BOOKS';

export interface IBooks {
  items: Array<any>,
  isLoad: boolean,
  isFalse: boolean,
  totalItems?: number
}

interface IFetchBooks {
  type: typeof FETCH_BOOKS,
  items: Array<any>,
  totalItems: number
}

interface INextPageBooks {
  type: typeof NEXT_PAGE_BOOKS,
  items: Array<any>
}

interface IFetchBooksIsLoading {
  type: typeof FETCH_BOOKS_IS_LOADING,
  isLoad: boolean
}

interface IFetchBooksIsFalse {
  type: typeof FETCH_BOOKS_IS_FALSE,
  isFalse: boolean
}

export type BooksActionTypes = IFetchBooks | INextPageBooks | IFetchBooksIsLoading | IFetchBooksIsFalse