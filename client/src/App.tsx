import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './common-styles/index.css'
import BookListPage from './components/BookListPage/BookListPage'
import BookPage from './components/BookPage/BookPage'
import PurchasePage from './components/PurchasePage/PurchasePage'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Message, { MessageTypes, MessageTextSizes } from './components/Message/Message'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default class App extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <div className='content'>
          <ErrorBoundary>
            <BrowserRouter>
              <Switch>
                <Route exact path={['/', '/books']} component={BookListPage} />
                <Route exact path='/books/:bookId' render={(routeProps) => <BookPage bookId={routeProps.match.params.bookId} />} />
                <Route exact path='/purchase' component={PurchasePage} />
                <Route path='/*'>
                  <Message type={MessageTypes.msgNotFound} size={MessageTextSizes.msgBig} text='Sorry, page not found :(' />
                </Route>
              </Switch>
            </BrowserRouter>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    )
  }
}
