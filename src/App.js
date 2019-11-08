import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Vistas importadas */
import HomeApp from './views/HomeApp'
import CreateMatch from './views/CreateMatch'
/* import MatchDetails from './views/MatchDetails' */

/* Importando Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Import API */
import places from './db/places.json'

class App extends Component {
  state = {
    matchs: [],
    places: places,
  }

  createMatch = (match) => {
    // Copiar state actual
    const matchs = [...this.state.matchs, match]

    // Agregar nuevo state
    this.setState({
      matchs: matchs
    })
  }

  deleteMatch = (id) => {
    const newMatchs = this.state.matchs.filter( match => match.id !== id)
    this.setState({matchs: newMatchs})
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <HomeApp 
              deleteMatch={this.deleteMatch}
              matchs={this.state.matchs} 
            />
            
          </Route>

          <Route path='/create_match' >
            <CreateMatch 
              places={this.state.places} 
              createMatch={this.createMatch}
            />
          </Route>

          {/* <Route to='/match/:id' >
            <MatchDetails
              matchs={this.state.matchs}
            />
          </Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
