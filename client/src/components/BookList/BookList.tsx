import React from 'react';
import { Book } from '../../helpers/BookModel'
import './index.css'

interface BookListProps {
  books: Array<Book>,
}

export default class BookList extends React.Component<BookListProps> {
  render() {
    // TODO: map book array to BookCards here
    return <span> hey </span>
  }
}
