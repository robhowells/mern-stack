import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Form} exact />
      <Route path="/results" component={Results} />
    </Switch>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
