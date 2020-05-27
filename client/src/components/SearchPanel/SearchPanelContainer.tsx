import React from 'react';
import SearchPanel from './SearchPanel';

interface SearchPanelState {
  query: string,
}

export default class SearchPanelContainer extends React.Component<{}, SearchPanelState> {
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
    // TODO: redux here
    alert(`submited with: ${this.state.query.trim()}`);
  }

  render() {
    return <SearchPanel query={this.state.query}
      handleQueryChange={this.handleQueryChange}
      handleQuerySubmit={this.handleQuerySubmit} />
  }
}
