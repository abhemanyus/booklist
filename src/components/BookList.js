import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetail from './BookDetail';

function BookList() {
  const { books } = useContext(BookContext);
  return (
    books.length ?
    <div className="booklist">
      {books.map(book => <BookDetail book={book} key={book.id}/>)}
    </div>
    :
    <div className="booklist empty">
      No books to read. Hello free time :D
    </div>
  )
}

export default BookList
