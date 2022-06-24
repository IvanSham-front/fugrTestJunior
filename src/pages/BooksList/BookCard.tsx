import React, { FC } from "react";

//ui
import { Link } from 'react-router-dom';
import cover from '../../assets/img/oblozhka.jpg'

interface IBookCardProps {
  book: {[x: string]: any}
}


const BookCard: FC<IBookCardProps> = ({book}) => {

  let imageCover;

  if(book.volumeInfo?.imageLinks?.hasOwnProperty('thumbnail')) {
    imageCover = book.volumeInfo.imageLinks.thumbnail
  } else {
    imageCover = cover
  }

  return (
    <div className="book-card">
      <Link to={`/selectedBook/${book.id}`}>
        <figure className="book-card__inner d-flex flex-column justify-content-between align-items-start">
            <img 
            src={imageCover}
            alt='book cover'
            className="book-card__cover flex-grow-0 align-self-center"
            ></img>

              {
                book.volumeInfo.hasOwnProperty('categories') ? 
                <span className="book-card__categories">
                  {book.volumeInfo?.categories[0]}
                </span>
                : <span></span>
              }
            
            <figcaption className="book-card__title">{book.volumeInfo?.title}</figcaption>

            <div className="book-card__authors">
              { 
                book.volumeInfo?.authors?.map((author:string, index:number) => {
                  const authors = book.volumeInfo.authors
                  return (
                      <span key={index}>
                        {author}
                        { index + 1 < authors.length ? ', ' : ''}
                      </span> 
                  )
                })
              }
            </div>
          </figure>
      </Link>
        
    </div>
  ) 
}

export default BookCard