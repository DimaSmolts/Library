import React from 'react';
import { Book } from '../../helpers/BookModel';
import './index.css';
import BookCard from '../BookCard/BookCard'

interface BookListProps {
  books: Array<Book>,
}

export default class BookList extends React.Component<BookListProps> {
  render() {
    return <div className='book-list'>
      {
        this.props.books.map(book => {
          return <BookCard book={book} />
        })
      }
    </div>
  }
}
