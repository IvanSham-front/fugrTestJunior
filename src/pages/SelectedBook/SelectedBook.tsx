import React, { useEffect } from 'react';
// hooks
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

// store
import { getSelectBook } from '../../store/async';
import { ISelectedBook } from '../../store/selectedBook/selectedBookType';

// ui
import { Spinner, CloseButton } from 'react-bootstrap';
import cover from '../../assets/img/oblozhka.jpg' 
import ErrorPage from '../ErrorPage';


const SelectedBook = () => {
  const dispatch = useAppDispatch();
  const bookState = useAppSelector<ISelectedBook>(state => state.selectedBook)
  const book = bookState.selectedBook
  const location = useLocation()

  
  useEffect(() => {
    dispatch(getSelectBook(location.pathname.split('/')[2]))
  },[])

  let image;

  if (book.imageLinks?.hasOwnProperty('small')) {
    image = book.imageLinks.small
  } else if (book.imageLinks?.hasOwnProperty('thumbnail')) {
    image = book.imageLinks.thumbnail
  } else {
    image = cover
  }
  
  if (!bookState.isFalse) {
    return (
      <>
      {
        !bookState.isLoad ? <Spinner animation='border' variant='light'/> :
        (
        <div className='App__central books container col-10'>
          <Link to="/">
            <CloseButton className='close'/>
          </Link>
  
          <div className='selected-book selected-book__inner d-flex flex-column flex-lg-row align-items-center'>
              <div className='col-lg-4 col-10 d-flex justify-content-center'>
                <img
                src={image}
                  alt='book cover'
                  className="selected-book__cover"></img>
              </div>
              <div className='selected-book__info col-10 col-lg-7'>
                <span className='selected-info__categories'>
                  {book.categories}
                </span>
  
                <h2 className='selected-book__title selected-info__title'>
                  {book.title}
                </h2>
  
                <div className='selected-book__authors'>
                  {
                    book.authors?.map((author:string, index:number) => {
                      return (
                          <span key={index}>
                            {author}
                            { index + 1 < book.authors.length ? ', ' : ''}
                            </span>
                      )
                    })
                  }
                </div>
  
                <div className='selected-book__description'>{book.description}</div>
            </div>
          </div>
        </div>
        )
      }
      </>
    )
  } else return (
    <ErrorPage/>
  )
  
}

export default SelectedBook