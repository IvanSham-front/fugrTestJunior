import { FETCH_BOOKS, NEXT_PAGE_BOOKS, 
  FETCH_BOOKS_IS_FALSE, FETCH_BOOKS_IS_LOADING,
  IBooks, BooksActionTypes } from './booksTypes';

const initialState: IBooks = {
  items: [],
  isLoad: false,
  isFalse: false
}

export const books = (state = initialState, action: BooksActionTypes):IBooks => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        items: action.items,
        totalItems: action.totalItems
      }
    case NEXT_PAGE_BOOKS: 
    return {
      ...state,
      items: [...state.items, ...action.items]       
    }
    case FETCH_BOOKS_IS_LOADING:
      return {
        ...state,
        isLoad: action.isLoad
      }
    case FETCH_BOOKS_IS_FALSE:
      return {
        ...state,
        isFalse: action.isFalse
      }
    default: return state
  }
}