import { Book } from '../../helpers/BookModel'
import {
  START_FETCHING_BOOKS,
  ERROR_FETCHING_BOOKS,
  BOOKS_NOT_FOUND,
  SUCCESS_FETCHING_BOOKS,
  CLEAN_UP_BOOKS,
  BookListActions,
} from '../actions/bookListActions'

export const initialListBookState = {
  areFetched: false,
  books: [] as Array<Book>,
  error: null as number,
  notFound: false,
}

export type BookListState = typeof initialListBookState

export function bookListReducer(state: BookListState = initialListBookState, action: BookListActions): BookListState {
  switch (action.type) {
    case START_FETCHING_BOOKS:
      return {
        books: [],
        error: null,
        notFound: false,
        areFetched: false,
      }
    case ERROR_FETCHING_BOOKS:
      return {
        error: action.errorCode,
        notFound: false,
        books: [],
        areFetched: false,
      }
    case BOOKS_NOT_FOUND:
      return {
        error: null,
        notFound: true,
        books: [],
        areFetched: true,
      }
    case SUCCESS_FETCHING_BOOKS:
      return {
        error: null,
        notFound: false,
        books: action.books,
        areFetched: true,
      }
    case CLEAN_UP_BOOKS:
      return {
        error: null,
        notFound: false,
        books: [],
        areFetched: false,
      }
    default:
      return state
  }
}
