import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Match from '../components/Match'



class HomeApp extends Component {
    render() {
        return (
            <div className="viewContainer">
                <div className="matchesListContainer">
                    <div className="matchesList__header">
                        <h1>Lista de partidos</h1>
                        <Link to='/create_match'><button className='btn btn-success'>Crear Partido</button></Link>
                    </div>

                    <div className='matchesList__listContainer'>
                        <ul className='matchesList__ul' >
                            {this.props.matchs.map( match => {
                                return (
                                    <li key={match.id} >
                                        <Match 
                                            name={match.name}
                                            date={match.date}
                                            type={match.type}
                                            id={match.id}
                                            deleteMatch={this.props.deleteMatch}
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