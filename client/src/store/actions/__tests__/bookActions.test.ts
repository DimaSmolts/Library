import { Book } from '../../../helpers/BookModel'
import {
  START_FETCHING_BOOK,
  ERROR_FETCHING_BOOK,
  BOOK_NOT_FOUND,
  SUCCESS_FETCHING_BOOK,
  CLEAN_UP_BOOK,
  startFetchingBook,
  errorFetchingBook,
  bookNotFound,
  successFetchingBook,
  cleanUpBook,
  StartFetchingBookAction,
  ErrorFetchingBookAction,
  BookNotFoundAction,
  SuccessFetchingBookAction,
  CleanUpBookAction
} from '../bookActions'

describe('actions:', () => {
  it('should create an startFetchingBook action ', () => {
    const expectedAction = {
      type: START_FETCHING_BOOK,
    } as StartFetchingBookAction

    expect(startFetchingBook()).toEqual(expectedAction)
  })

  it('should create an errorFetchingBook action ', () => {
    const errorCode = 500
    const expectedAction = {
      type: ERROR_FETCHING_BOOK,
      errorCode: errorCode
    } as ErrorFetchingBookAction

    expect(errorFetchingBook(errorCode)).toEqual(expectedAction)
  })

  it('should create an bookNotFound action ', () => {
    const expectedAction = {
      type: BOOK_NOT_FOUND,
    } as BookNotFoundAction

    expect(bookNotFound()).toEqual(expectedAction)
  })

  it('should create an successFetchingBook action ', () => {
    const book = {} as Book
    const expectedAction = {
      type: SUCCESS_FETCHING_BOOK,
      book: book
    } as SuccessFetchingBookAction

    expect(successFetchingBook(book)).toEqual(expectedAction)
  })

  it('should create an cleanUpBook action ', () => {
    const expectedAction = {
      type: CLEAN_UP_BOOK,
    } as CleanUpBookAction

    expect(cleanUpBook()).toEqual(expectedAction)
  })
})
