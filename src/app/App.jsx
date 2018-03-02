// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import HelloWorld from './HelloWorld';

export default function App() {
  return (
    <div>
      <Helmet defaultTitle="Hello World!">
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
