import {
  startFetchingBooks,
  errorFetchingBooks,
  booksNotFound,
  successFetchingBooks,
  cleanUpBooks
} from '../actions/bookListActions'
import { Book } from '../../helpers/BookModel'
import { Dispatch } from 'redux'
import { bookAPI } from '../../helpers/BookAPI'
import { filterBookList } from '../../helpers/bookListHelper'

export const getBooksThunk = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchingBooks())
    bookAPI.getBooks()
      .then<Array<Book>>(response => response.data)
      .then(books => filterBookList(books, query))
      .then(books => {
        if (books.length === 0) {
          // weird a bit, but was done like that due to requirements (client-side search)
          // in case of server-side search after filtering, 404 error would be returned
          throw { response: { status: 404 } }
        } else {
          dispatch(successFetchingBooks(books))
        }
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(booksNotFound())
        } else {
          dispatch(errorFetchingBooks(error.response.status))
        }
      });
  }
}

export const cleanUpThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanUpBooks())
  }
}
