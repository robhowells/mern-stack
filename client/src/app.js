import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';

const App = () => {
  return <ExampleComponent />
}

ReactDOM.render(<App />, document.getElementById('app'));
