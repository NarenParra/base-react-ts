import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home-page/HomePage';

export const App = (): ReactElement => {
  return <HomePage name='test' />;
};

ReactDOM.render(<App />, document.getElementById('root'));
