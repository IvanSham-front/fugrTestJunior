import { FETCH_SELECTED_BOOK, SelectedBookActionTypes, 
  ISelectedBook, FETCH_SELECTED_BOOK_IS_LOADING, 
  FETCH_SELECTED_BOOK_IS_FALSE } from './selectedBookType'

const initialState: ISelectedBook = {
  selectedBook: {},
  isLoad: false,
  isFalse: false
}


export const selectedBook = (state = initialState, action: SelectedBookActionTypes): ISelectedBook => {
      switch(action.type) {
        case FETCH_SELECTED_BOOK: 
          return {
            ...state, selectedBook: action.selectedBook
          }
        case FETCH_SELECTED_BOOK_IS_LOADING:
          return {
            ...state, isLoad: action.isLoad
          }
        case FETCH_SELECTED_BOOK_IS_FALSE:
          return {
            ...state, isFalse: action.isFalse
          }
        default: return state
      } 
}