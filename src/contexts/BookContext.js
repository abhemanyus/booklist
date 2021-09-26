import React, { createContext, useEffect, useReducer } from 'react'
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useReducer(BookReducer, [], () => {
    const data = JSON.parse(localStorage.getItem('books'));
    if (data !== null) return data;
    return [];
  })
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
