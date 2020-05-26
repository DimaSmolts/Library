import { Book } from '../../helpers/BookModel'
import {
  START_FETCHING_BOOKS,
  ERROR_FETCHING_BOOKS,
  SUCCESS_FETCHING_BOOKS,
  CLEAN_UP_BOOKS,
  BookListActions
} from '../actions/bookListActions'

const initialListBookState = {
  areFetched: false,
  books: [] as Array<Book>,
  error: null as number
}

export type BookListState = typeof initialListBookState;

export function bookListReducer(state: BookListState = initialListBookState, action: BookListActions): BookListState {
  switch (action.type) {
    case START_FETCHING_BOOKS:
      return {
        books: [],
        error: null,
        areFetched: false
      }
    case ERROR_FETCHING_BOOKS:
      return {
        error: action.errorCode,
        books: [],
        areFetched: false
      }
    case SUCCESS_FETCHING_BOOKS:
      return {
        error: null,
        books: action.books,
        areFetched: true
      }
    case CLEAN_UP_BOOKS:
      return {
        error: null,
        books: [],
        areFetched: false,
      }
    default:
      return state;
  }
}
