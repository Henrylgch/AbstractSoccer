import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Match from '../components/Match'


class HomeApp extends Component {
    state = {
        matchs: [],
    }

    // Al iniciar el componente
    componentDidMount() {
        const matchsLS = localStorage.getItem('matchs');
        if (matchsLS) {
            this.setState({
            matchs: JSON.parse(matchsLS)
            })
        }
    }

    // Actualizar el componente
    componentDidUpdate() {
        localStorage.setItem('matchs', JSON.stringify(this.state.matchs))
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
        const mensaje = Object.keys(this.state.matchs).length === 0 ? 'No hay partidos programados' : 'Lista de partidos'
        
        return (
            <div className="container">
                <div className="container border rounded w-75 p-3 mt-5">
                    <div className="row px-3" >
                        <div className="col">
                            <h2>{mensaje}</h2>
                        </div>
                        <div className="col-lg-3">
                            <Link to='/create_match'><button className='btn btn-success'>Crear Partido</button></Link>
                        </div>
                    </div>

                    <div className="row px-3">
                        <ul className="list-group" >
                            {this.state.matchs.map( match => {
                                return (
                                    <li className="list-group-item" key={match.id} >
                                        <Match 
                                        match={match}
                                        deleteMatch={this.deleteMatch}
                                         />
                                    </li>
                                )
                            } )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeApp