import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookDetail({book}) {
  const {setBooks} = useContext(BookContext)
  return (
    <div onClick={() => setBooks({type: "REMOVE", id: book.id})} className="book-detail">
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </div>
  )
}

export default BookDetail
