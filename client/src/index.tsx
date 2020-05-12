import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log('API url:', process.env.REACT_APP_API_URL);
