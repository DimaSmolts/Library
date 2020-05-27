import React from 'react';
import SearchPanel from './SearchPanel';
import { searchBookThunk } from '../../store/thunks/searchThunks';
import { connect, ConnectedProps } from 'react-redux';

interface SearchPanelState {
  query: string,
}

class SearchPanelContainer extends React.Component<PropsFromRedux, SearchPanelState> {
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
    this.props.searchBookThunk(this.state.query);
  }

  render() {
    return <SearchPanel query={this.state.query}
      handleQueryChange={this.handleQueryChange}
      handleQuerySubmit={this.handleQuerySubmit} />
  }
}

const mapDispatch = {
  searchBookThunk: (query: string) => searchBookThunk(query),
}

const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchPanelContainer);
