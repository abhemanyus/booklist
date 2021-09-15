import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h3>BookList</h3>
      <p>{books.length || "No"} more books to go through...</p>
    </div>
  )
}

export default Navbar
