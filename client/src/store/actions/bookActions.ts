import { Book } from '../../helpers/BookModel'

// constants
export const START_FETCHING_BOOK = 'START_FETCHING_BOOK';
export const ERROR_FETCHING_BOOK = 'ERROR_FETCHING_BOOK';
export const BOOK_NOT_FOUND = 'BOOKS_NOT_FOUND';
export const SUCCESS_FETCHING_BOOK = 'SUCCESS_FETCHING_BOOK';
export const CLEAN_UP_BOOK = 'CLEAN_UP_BOOK';

// actions
type StartFetchingBookAction = {
  type: typeof START_FETCHING_BOOK,
}
type ErrorFetchingBookAction = {
  type: typeof ERROR_FETCHING_BOOK,
  errorCode: number | null
}
type BookNotFoundAction = {
  type: typeof BOOK_NOT_FOUND,
}
type SuccessFetchingBookAction = {
  type: typeof SUCCESS_FETCHING_BOOK,
  book: Book
}
type CleanUpBookAction = {
  type: typeof CLEAN_UP_BOOK,
}

// actionCreators
export const startFetchingBook = () => {
  return {
    type: START_FETCHING_BOOK,
  };
}
export const errorFetchingBook = (errorCode: number) => {
  return {
    type: ERROR_FETCHING_BOOK,
    errorCode: errorCode,
  };
}
export const bookNotFound = () => {
  return {
    type: BOOK_NOT_FOUND,
  };
}
export const successFetchingBook = (book: Book) => {
  return {
    type: SUCCESS_FETCHING_BOOK,
    book: book,
  };
}
export const cleanUpBook = () => {
  return {
    type: CLEAN_UP_BOOK,
  };
}

export type BookActions =
  StartFetchingBookAction
  | ErrorFetchingBookAction
  | BookNotFoundAction
  | SuccessFetchingBookAction
  | CleanUpBookAction;
