import React from 'react';

// hooks
import { useAppSelector, useAppDispatch } from '../../store/hooks';

// store
import { IBooks } from '../../store/books/booksTypes';
import { getNextPage } from '../../store/async';

// components
import BookCard from './BookCard';
import { Spinner } from 'react-bootstrap';
import ErrorPage from '../ErrorPage';

const BooksList = () => {
  const books = useAppSelector<IBooks>(state => state.books);
  const url = useAppSelector<string>(state => state.url);
  const dispatch = useAppDispatch()

  const onLoadMore = (url:string) => {
   dispatch(getNextPage(url))
  }

  if (books.items.length > 0) {
    return (
      <>
        {
          !books.isLoad ? <Spinner animation='border' variant='light'/> : 
          
          <div className='App__central books container'>
            <h2 className='books__title text-center'>found {books.totalItems} results</h2>
    
            <ul className='books__list d-flex justify-content-around col-12 flex-wrap align-items-stretch'>
              {
                books.items.map((book, index) => {
                  return (
                    <li 
                    className='books__item'
                    key={index}>
                      <BookCard book={book} />
                    </li>
                  )
                })
              } 
            </ul>
                
            <button type='button' 
            className='books__load-more-btn btn btn-link align-self-center'
            onClick={() => onLoadMore(url)}
            >
            Load more
            </button>

        </div>
        }
      </>
    )
  } else if (books.isFalse) {
    return (
      <ErrorPage />
    )
  } else return (
    <></>
  )
}

export default BooksList;