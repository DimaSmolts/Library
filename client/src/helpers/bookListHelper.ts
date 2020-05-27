import { Book } from './BookModel'

export function filterBookList(books: Array<Book>, query: string): Array<Book> {
  const temp = books.filter(book => {
    return book.name
      .trim()
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  })
  return temp;
}
