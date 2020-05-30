import {
  startFetchingBook,
  errorFetchingBook,
  bookNotFound,
  successFetchingBook,
  cleanUpBook
} from '../actions/bookActions'
import { Book } from '../../helpers/BookModel'
import { Dispatch } from 'redux'
import { bookAPI } from '../../helpers/BookAPI'

export const getBookThunk = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchingBook());
    bookAPI.getBook(id)
      .then<Book>(response => response.data)
      .then(book => {
        dispatch(successFetchingBook(book));
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(bookNotFound());
        } else {
          dispatch(errorFetchingBook(error.response.status));
        }
      });
  }
}

export const cleanUpThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanUpBook());
  }
}
