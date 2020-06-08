import { Book } from '../../helpers/BookModel'

// constants
export const START_FETCHING_BOOKS = 'START_FETCHING_BOOKS'
export const ERROR_FETCHING_BOOKS = 'ERROR_FETCHING_BOOKS'
export const BOOKS_NOT_FOUND = 'BOOKS_NOT_FOUND'
export const SUCCESS_FETCHING_BOOKS = 'SUCCESS_FETCHING_BOOKS'
export const CLEAN_UP_BOOKS = 'CLEAN_UP_BOOKS'

// actions
export type StartFetchingBooksAction = {
  type: typeof START_FETCHING_BOOKS,
}
export type ErrorFetchingBooksAction = {
  type: typeof ERROR_FETCHING_BOOKS,
  errorCode: number | null,
}
export type BooksNotFoundAction = {
  type: typeof BOOKS_NOT_FOUND,
}
export type SuccessFetchingBooksAction = {
  type: typeof SUCCESS_FETCHING_BOOKS,
  books: Array<Book>,
}
export type CleanUpBooksAction = {
  type: typeof CLEAN_UP_BOOKS,
}

// actionCreators
export const startFetchingBooks = (): StartFetchingBooksAction => {
  return {
    type: START_FETCHING_BOOKS,
  };
}
export const errorFetchingBooks = (errorCode: number): ErrorFetchingBooksAction => {
  return {
    type: ERROR_FETCHING_BOOKS,
    errorCode: errorCode,
  };
}
export const booksNotFound = (): BooksNotFoundAction => {
  return {
    type: BOOKS_NOT_FOUND,
  };
}
export const successFetchingBooks = (books: Array<Book>): SuccessFetchingBooksAction => {
  return {
    type: SUCCESS_FETCHING_BOOKS,
    books: books,
  };
}
export const cleanUpBooks = (): CleanUpBooksAction => {
  return {
    type: CLEAN_UP_BOOKS,
  };
}

export type BookListActions =
  StartFetchingBooksAction
  | ErrorFetchingBooksAction
  | BooksNotFoundAction
  | SuccessFetchingBooksAction
  | CleanUpBooksAction
