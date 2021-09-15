import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

function BookForm() {
  const { setBooks } = useContext(BookContext);
  const [book, setBook] = useState({title: "", author: ""});
  const handleChange = (event) => {
    setBook({...book, [event.target.name]: event.target.value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks({type: "ADD", book});
    setBook({title: "", author: ""});
  };
  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-title">Title</label>
        <input type="text" name="title" required autoComplete="off"
        value={book.title} onChange={handleChange}/>
        <label htmlFor="author" className="form-author">Author</label>
        <input type="text" name="author" required autoComplete="off"
        value={book.author} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default BookForm
