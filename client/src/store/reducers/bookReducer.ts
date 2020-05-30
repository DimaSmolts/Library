import { Book } from '../../helpers/BookModel'
import {
  START_FETCHING_BOOK,
  ERROR_FETCHING_BOOK,
  BOOK_NOT_FOUND,
  SUCCESS_FETCHING_BOOK,
  CLEAN_UP_BOOK,
  BookActions
} from '../actions/bookActions'

const initialBookState = {
  isFetched: false,
  book: null as Book,
  error: null as number,
  notFound: false,
}

export type BookState = typeof initialBookState;

export function bookReducer(state: BookState = initialBookState, action: BookActions): BookState {
  switch (action.type) {
    case START_FETCHING_BOOK:
      return {
        book: null,
        error: null,
        notFound: false,
        isFetched: false
      }
    case ERROR_FETCHING_BOOK:
      return {
        error: action.errorCode,
        notFound: false,
        book: null,
        isFetched: false
      }
    case BOOK_NOT_FOUND:
      return {
        error: null,
        notFound: true,
        book: null,
        isFetched: false
      }
    case SUCCESS_FETCHING_BOOK:
      return {
        error: null,
        notFound: false,
        book: action.book,
        isFetched: true
      }
    case CLEAN_UP_BOOK:
      return {
        error: null,
        notFound: false,
        book: null,
        isFetched: false,
      }
    default:
      return state;
  }
}
