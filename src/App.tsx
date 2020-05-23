import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';

type AppProps = {
  loader: {
    active: boolean;
  };
};

function App({ loader }: AppProps) {
  return (
    <Router>
      <Navbar />
      {loader.active ? <Loader /> : null}
      <Container maxWidth="lg" style={{ paddingTop: 100 }}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const mapStateToProps = ({ loader }: any) => ({
  loader,
});

export default connect(mapStateToProps)(App);
