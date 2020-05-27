import React from 'react';
import './index.css'

interface SearchPanelProps {
  query: string,
  handleQueryChange: (event: React.FormEvent<EventTarget>) => void,
  handleQuerySubmit: (event: React.FormEvent<EventTarget>) => void,
}

export default class SearchPanel extends React.Component<SearchPanelProps> {
  render() {
    return <div className='search-panel' >
      <h2>Find a book!</h2>
      <form className='search-panel-form' onSubmit={this.props.handleQuerySubmit.bind(this)}>
        <span>I am looking for:</span>
        <input className='search-panel-input'
          spellCheck='false'
          type='text'
          placeholder='search...'
          value={this.props.query}
          onChange={this.props.handleQueryChange.bind(this)} />
        <input className='search-panel-submit'
          type='submit'
          value='Go!' />
      </form>
    </div>
  }
}
