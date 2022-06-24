import { combineReducers } from "@reduxjs/toolkit";
import { books } from "./books/booksReducers";
import { booksUrl } from "./booksUrl/booksUrlReducers";
import { selectedBook } from "./selectedBook/selectedBookReducer";

export const rootReducer = combineReducers({
  books,
  url: booksUrl,
  selectedBook
})