import React, { Component } from 'react';
import uuid from 'uuid'

import DetailField from '../components/DetailField'
import Map from '../components/Map'

import places from '../db/places.json'
import credentials from '../credentials'
import DetailSectionTitle from '../components/DetailSectionTitle';
import Player from '../components/Player';
  
class MatchDetails extends Component {
    state = {
        match: {
            players: []
        },
        place: {},
        player: {
            email: '',
            status: ''
        },
        error: false
    }
    
    //Al iniciar el componente
    componentDidMount() {
        this.getMatchById()
    }

    //Obtener el partido segun el ID de la URL
    getMatchById = () => {
        const matchs = JSON.parse(localStorage.getItem('matchs'))
        const matchById = matchs.filter( match => {
            return match.id === this.props.match.params.matchId
        } )
        this.setState({
            match: matchById[0]
        })
        this.getPlaceById(matchById[0].place)
    }

    //Obtener datos de la cancha, segun la cancha seleccionada en el partido
    getPlaceById = (id) => {
        const placeById = places.filter(place => {
            return place.ID === id
        } )
        this.setState({place: placeById[0]})
    }

    handleChange = (e) => {
        this.setState({
            player: {
                [e.target.name]: e.target.value,
                status: 'Pendiente'
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // Valores para luego volver el formulario a default
        const formDefault = {
            email: '',
            status: 0,
        }

        //Extraemos los datos del state
        const {email} = this.state.player

        //Validamos los datos del formulario 
        if (email === '') {
            this.setState ({error: true})
            // Detenemos el codigo
            return;
        }

        //Nos traemos el partido del ID
        const matchs = JSON.parse(localStorage.getItem('matchs'))
        const matchById = matchs.filter( match => {
            return match.id === this.props.match.params.matchId
        } )
        
        //Guardamos nuevo jugador y generamos su ID
        const newPlayer = {...this.state.player}
        newPlayer.id = uuid()

        matchById[0].players.push(newPlayer)

        localStorage.setItem("matchs",JSON.stringify(matchs))

        this.getMatchById()

        //Volviendo el formulario a default
        this.setState({
            player: formDefault
        })
    }

    deletePlayer = (id) => {
        //Nos traemos el partido del ID
        const matchs = JSON.parse(localStorage.getItem('matchs'))
        const matchById = matchs.filter( match => {
            return match.id === this.props.match.params.matchId
        } )

        //Extraemos los jugadores del partido
        const actuallyPlayers = matchById[0].players
        
        //Filtramos y eliminamos el jugador de la lista
        const newPlayersList = actuallyPlayers.filter( player => player.id !== id )

        //Se incorpora la lista filtrada sin el jugador eliminado
        matchById[0].players = newPlayersList

        //Se envia a la base de datos
        localStorage.setItem("matchs", JSON.stringify(matchs))

        //Aplicamos la nueva lista al state
        this.getMatchById()
    }

    render() {
        const {name, type, date, time} = this.state.match

        const mensaje = Object.keys(this.state.match.players).length === 0 ? 'No hay jugadores invitados' : 'Lista de jugadores'
        const latLng = this.state.place
        console.log(latLng)

        return (
            <div className="container">
                <div className="row mt-5">
                    <h1 className="col-12">{name}</h1>
                </div>

                <div className="row mt-4" >
                    <div className="col-lg-5 mb-3">
                        <div className="border rounded p-5 mb-3">
                            <DetailSectionTitle title="Informacion del partido" />
                            
                            <DetailField 
                                name="Fecha y Hora"
                                content={`${date}, ${time}`}
                            />
                            <DetailField 
                                name="Tipo de partido" 
                                content={type} 
                            />
                        </div>

                        <div className="border rounded p-5">
                            <div className="container-fluid p-0" >
                                <DetailSectionTitle title="Informacion de la cancha" />
                                
                                <div className="row">
                                    <div className="col-sm-12 mb-2">
                                        <DetailField 
                                            name="Nombre" 
                                            content={this.state.place.nombre} 
                                        />
                                        <DetailField 
                                            name="Telefono" 
                                            content={this.state.place.TELÉFONO} 
                                        />
                                        <DetailField 
                                            name="Calle" 
                                            content={this.state.place.calle} 
                                        />
                                        <DetailField 
                                            name="Comuna" 
                                            content={this.state.place.comuna} 
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                    <Map 
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
                                        containerElement={<div style={{height: '200px'}} />}
                                        mapElement={<div style={{height: '100%'}} />}
                                        loadingElement={<p>Cargando</p>}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="border rounded p-5 mb-3">
                            <DetailSectionTitle title="Jugadores" />

                            <div>
                                <form className="form-row mb-3" onSubmit={this.handleSubmit} >
                                    <div className="form-group col-md-8">
                                        <input 
                                            placeholder="Correo electronico" 
                                            className="form-control" 
                                            type="email" 
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.player.email}
                                        />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input 
                                            type="submit" 
                                            className="btn btn-success" 
                                            value="Invitar Jugador"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div>
                                <h5>{mensaje}</h5>

                                <div>
                                    <ul className="list-group">
                                        <li className="row border-bottom mt-3 pb-2 d-none d-lg-flex d-xl-none">
                                            <div className="col text-truncate d-flex align-items-center">
                                                <span className="font-weight-bold" >Jugador</span>
                                            </div>

                                            <div className="col-lg-3 d-flex align-items-center">
                                                <span className="font-weight-bold">Estado</span>
                                            </div>
                                            
                                            <div className="col-lg-3 d-flex justify-content-center align-items-center"> 
                                                <span className="font-weight-bold">Opcion</span>
                                            </div>
                                        </li>

                                        {
                                            !this.state.match.players ? <div>No hay jugadores invitados</div> :

                                            this.state.match.players.map(player => {
                                            return (
                                                <li key={player.id} className="row mt-3">
                                                    <Player 
                                                        player={player}
                                                        deletePlayer={this.deletePlayer}
                                                    />
                                                </li>
                                            )
                                        } ) }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatchDetails;