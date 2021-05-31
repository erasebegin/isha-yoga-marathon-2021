import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { guests } from './data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      {guests.map((guest) => (
        <Route path={`/${guest.id}`}>
          <p>guest: {guest.name}</p>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
