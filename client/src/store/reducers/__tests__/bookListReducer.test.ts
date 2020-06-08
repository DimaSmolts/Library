import { Book } from '../../../helpers/BookModel'
import {
  bookListReducer,
  initialListBookState,
} from '../bookListReducer'
import {
  startFetchingBooks,
  errorFetchingBooks,
  booksNotFound,
  successFetchingBooks,
  cleanUpBooks,
  BookListActions,
} from '../../actions/bookListActions'

describe('bookListReducer', () => {
  it('should return the initial state', () => {
    expect(bookListReducer(undefined, {} as BookListActions)).toEqual(initialListBookState)
  })
  it('should handle startFetchingBooks action', () => {
    expect(bookListReducer(undefined, startFetchingBooks())).toEqual(initialListBookState)
  })
  it('should handle errorFetchingBooks action', () => {
    expect(bookListReducer(undefined, errorFetchingBooks(500)).error).toEqual(500)
  })
  it('should handle booksNotFound action', () => {
    expect(bookListReducer(undefined, booksNotFound()).notFound).toEqual(true)
  })
  it('should handle successFetchingBooks action', () => {
    expect(bookListReducer(undefined, successFetchingBooks([{}, {}] as Array<Book>)).books.length).not.toBe(0)
  })
  it('should handle cleanUpBooks action', () => {
    expect(bookListReducer(undefined, cleanUpBooks())).toEqual(initialListBookState)
  })
})
