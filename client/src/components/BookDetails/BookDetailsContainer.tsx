import React from 'react';
import { BookNavParams } from '../BookPage/BookPage'
import { Book } from '../../helpers/BookModel'
import BookDetails from './BookDetails'

type BookDetailsContainerState = {
  book: Book,
  isLoading: boolean
}

export default class BookDetailsContainer extends React.Component<BookNavParams, BookDetailsContainerState> {
  constructor(props: any) {
    super(props);
    this.state = { book: null, isLoading: true }
  }

  async componentDidMount() {
    fetch(`http://localhost:3000/api/books/${this.props.bookId}`)
      .then<Book>(response => response.json())
      .then(book => this.setState({ book: book, isLoading: false }))
      .catch(error => { throw new Error('something wrong') });
  }

  render() {
    if (this.state.isLoading === true) {
      return <span> Loading </span>
    } else if (this.state.isLoading === false) {
      return <BookDetails book={this.state.book} />
    }
  }
}
