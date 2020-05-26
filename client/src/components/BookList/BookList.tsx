import React from 'react';
import { Book } from '../../helpers/BookModel'
import './index.css'

interface BookDListProps {
  books: Array<Book>,
}

export default class BookList extends React.Component<BookDListProps> {
  render() {
    // TODO: map book array to BookCards here
    return <span> hey </span>
  }
}
