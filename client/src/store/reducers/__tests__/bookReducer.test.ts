import { Book } from '../../../helpers/BookModel'
import {
  bookReducer,
  initialBookState,
} from '../bookReducer'
import {
  startFetchingBook,
  errorFetchingBook,
  bookNotFound,
  successFetchingBook,
  cleanUpBook,
  BookActions,
} from '../../actions/bookActions'

describe('bookReducer', () => {
  it('should return the initial state', () => {
    expect(bookReducer(undefined, {} as BookActions)).toEqual(initialBookState)
  })
  it('should handle startFetchingBook action', () => {
    expect(bookReducer(undefined, startFetchingBook())).toEqual(initialBookState)
  })
  it('should handle errorFetchingBook action', () => {
    expect(bookReducer(undefined, errorFetchingBook(500)).error).toEqual(500)
  })
  it('should handle bookNotFound action', () => {
    expect(bookReducer(undefined, bookNotFound()).notFound).toEqual(true)
  })
  it('should handle successFetchingBook action', () => {
    expect(bookReducer(undefined, successFetchingBook({} as Book)).book).not.toBe(null)
  })
  it('should handle cleanUpBook action', () => {
    expect(bookReducer(undefined, cleanUpBook())).toEqual(initialBookState)
  })
})
