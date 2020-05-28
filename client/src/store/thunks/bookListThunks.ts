import {
  startFetchingBooks,
  errorFetchingBooks,
  successFetchingBooks,
  cleanUpBooks
} from '../actions/bookListActions'
import { Book } from '../../helpers/BookModel'
import { Dispatch } from 'redux'
import { bookAPI } from '../../helpers/BookAPI'
import { filterBookList } from '../../helpers/bookListHelper'

export const getBooksThunk = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchingBooks());
    bookAPI.getBooks()
      .then<Array<Book>>(response => response.data)
      .then(books => filterBookList(books, query))
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
