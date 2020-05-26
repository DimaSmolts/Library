import {
  startFetchingBooks,
  errorFetchingBooks,
  successFetchingBooks,
  cleanUpBooks
} from '../actions/bookListActions'
import { Book } from '../../helpers/BookModel'
import { Dispatch } from 'redux'
import { bookAPI } from '../../helpers/BookAPI'

export const getBooksThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchingBooks());
    bookAPI.getBooks()
      .then<Array<Book>>(response => response.data)
      .then(books => {
        dispatch(successFetchingBooks(books));
      })
      .catch(error => {
        dispatch(errorFetchingBooks(error.response.status));
      });
  }
}

export const cleanUpThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanUpBooks());
  }
}
