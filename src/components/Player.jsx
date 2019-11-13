import React, { Fragment } from 'react'


const Player = ({player, deletePlayer}) => {
    return (
        <Fragment>
                <div className="col text-truncate d-flex align-items-center">
                    {player.email}
                </div>

                <div className="col-lg-3 d-flex align-items-center">
                    {player.status}
                </div>
                
                <div className="col-lg-4"> 
                    <button className="w-100 btn btn-danger" onClick={() => {deletePlayer(player.id)}} >
                        Eliminar
                    </button> 
                </div>
        </Fragment>
    )
}

export default Player