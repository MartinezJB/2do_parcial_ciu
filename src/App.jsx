import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header/>
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
