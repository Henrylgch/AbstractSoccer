import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Vistas importadas */
import HomeApp from './views/HomeApp'
import CreateMatch from './views/CreateMatch'
import MatchDetails from './views/MatchDetails'
import Layout from './components/layout/Layout';

/* Importando Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeApp} />
            <Route exact path='/create_match' component={CreateMatch} />
            <Route exact path='/match/:matchId' component={MatchDetails} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
