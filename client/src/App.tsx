import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import BookListPage from './components/BookListPage/BookListPage'
import BookPage from './components/BookPage/BookPage'
import PurchasePage from './components/PurchasePage/PurchasePage'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', '/books']} component={BookListPage} />
          <Route exact path='/books/:bookId' render={(routeProps) => <BookPage bookId={routeProps.match.params.bookId} />} />
          <Route exact path='/purchase' component={PurchasePage} />
          <Route path='/*' render={() => <h1>not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}
