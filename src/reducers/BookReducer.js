import { v1 as uuid } from 'uuid';

function BookReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.book, id: uuid() }];
    case "REMOVE":
      return state.filter(book => book.id !== action.id);
    default: return state;
  }
};

export default BookReducer;