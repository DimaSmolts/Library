import React from 'react';
import SearchPanel from './SearchPanel';
import { getBooksThunk } from '../../store/thunks/bookListThunks';
import { connect, ConnectedProps } from 'react-redux';
import { BookListHistory } from '../BookListPage/BookListPage';

interface SearchPanelState {
  query: string,
}

class SearchPanelContainer extends React.Component<PropsFromRedux & BookListHistory, SearchPanelState> {
  constructor(props: any) {
    super(props);
    this.state = { query: '' };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
  }

  handleQueryChange(event: React.FormEvent<EventTarget>) {
    this.setState({ query: (event.target as HTMLInputElement).value });
  }

  handleQuerySubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault();
    this.props.refreshBooks(this.state.query);
    this.props.history.push({
      pathname: '/books',
      search: `?search=${this.state.query}`,
    });
  }

  render() {
    return <SearchPanel query={this.state.query}
      handleQueryChange={this.handleQueryChange}
      handleQuerySubmit={this.handleQuerySubmit} />
  }
}

const mapDispatch = {
  refreshBooks: (query: string) => getBooksThunk(query),
}

const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchPanelContainer);
