import React, { Fragment } from 'react'


const Player = ({player}) => {
    return (
        <Fragment>
            <li key={player.id} className="row mt-3">
                <div className="col d-flex align-items-center">
                    {player.email}
                </div>
                <div className="col-lg-3 d-flex align-items-center">{player.status}</div>
                <div className="col-lg-3"> <button className="btn btn-danger" onClick={() => {this.deletePlayer(player.id)}} >Eliminar</button> </div>
            </li>
        </Fragment>
    )
}

export default Player