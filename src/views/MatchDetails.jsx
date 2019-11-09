import React, { Component } from 'react';

import places from '../db/places.json'
  
class MatchDetails extends Component {
    state = {
        match: {},
        place: {}
    }
 
    componentDidMount() {
        this.getMatchById()
        this.getPlaceById()
    }

    getMatchById = () => {
        const matchs = JSON.parse(localStorage.getItem('matchs'))
        const matchById = matchs.filter( match => {
            return match.id == this.props.match.params.matchId
        } )
        this.setState({
            match: matchById[0]
        })
        console.log(matchById)
    } 

    getPlaceById = async () => {
        const placeById = places.filter( place => {
            return place == this.state.match.place
        } )
        console.log(placeById)
    }

    render() {
        const {name, place, type, date, time} = this.state.match

        return (
            <div className="container">
                <div className="row mt-5">
                    <h1>{name}</h1>
                </div>

                <div className="row mt-4" >
                    <div className="border col-lg-7 p-4">
                        <div>
                            <h4>Informacion del partido:</h4>
                            <hr/>
                            <p className="m-1" > <span className="font-weight-bold" >Fecha y Hora:</span> {date}, {time}</p>
                            <p className="m-1" > <span className="font-weight-bold" >Tipo de partdio:</span> {type} </p>
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default MatchDetails;