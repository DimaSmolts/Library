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
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='layout'>
            <Header />
            <div className='content'>
              <ErrorBoundary>
                <Switch>
                  <Route exact path={['/', '/books']} component={BookListPage} />
                  <Route exact path='/books/:bookId' render={(routeProps) => <BookPage bookId={routeProps.match.params.bookId} />} />
                  <Route exact path='/purchase' component={PurchasePage} />
                  <Route path='/*'>
                    <Message type={MessageTypes.msgNotFound} size={MessageTextSizes.msgBig} text='Sorry, page not found :(' />
                  </Route>
                </Switch>
              </ErrorBoundary>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
