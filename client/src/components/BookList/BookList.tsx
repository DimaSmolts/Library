import React from 'react'
import { Book } from '../../helpers/BookModel'
import BookCard from '../BookCard/BookCard'
import './index.css'

interface BookListProps {
  books: Array<Book>,
}

const BookList: React.SFC<BookListProps> = (props: BookListProps) => {
  return <div className='book-list'>
    {
      props.books.map(book => {
        return <BookCard book={book} />
      })
    }
  </div>
}

export default BookList
