import { Book } from '../../../helpers/BookModel'
import {
  START_FETCHING_BOOKS,
  ERROR_FETCHING_BOOKS,
  BOOKS_NOT_FOUND,
  SUCCESS_FETCHING_BOOKS,
  CLEAN_UP_BOOKS,
  startFetchingBooks,
  errorFetchingBooks,
  booksNotFound,
  successFetchingBooks,
  cleanUpBooks,
  StartFetchingBooksAction,
  ErrorFetchingBooksAction,
  BooksNotFoundAction,
  SuccessFetchingBooksAction,
  CleanUpBooksAction
} from '../bookListActions'

describe('actions:', () => {
  it('should create an startFetchingBooks action ', () => {
    const expectedAction = {
      type: START_FETCHING_BOOKS,
    } as StartFetchingBooksAction

    expect(startFetchingBooks()).toEqual(expectedAction)
  })

  it('should create an errorFetchingBooks action ', () => {
    const errorCode = 500
    const expectedAction = {
      type: ERROR_FETCHING_BOOKS,
      errorCode: errorCode
    } as ErrorFetchingBooksAction

    expect(errorFetchingBooks(errorCode)).toEqual(expectedAction)
  })

  it('should create an booksNotFound action ', () => {
    const expectedAction = {
      type: BOOKS_NOT_FOUND,
    } as BooksNotFoundAction

    expect(booksNotFound()).toEqual(expectedAction)
  })

  it('should create an successFetchingBooks action ', () => {
    const books = [{}, {}] as Array<Book>
    const expectedAction = {
      type: SUCCESS_FETCHING_BOOKS,
      books: books
    } as SuccessFetchingBooksAction

    expect(successFetchingBooks(books)).toEqual(expectedAction)
  })

  it('should create an cleanUpBooks action ', () => {
    const expectedAction = {
      type: CLEAN_UP_BOOKS,
    } as CleanUpBooksAction

    expect(cleanUpBooks()).toEqual(expectedAction)
  })
})
