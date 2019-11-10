import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/Match.scss'


const Match = ({match, deleteMatch}) => {
        return (
            <Fragment>
                <div className="row container-fluid" >
                    <div className='col-md-2' >
                        <p>{match.date}</p>
                    </div>

                    <div className='col-md-4'>
                        <p>{match.name}</p>
                    </div>

                    <div className='col'>
                        <p>{match.type}</p>
                    </div>
                    
                    <div className="col-md-1">
                        <Link to={`/match/${match.id}`} >
                            <button className="btn btn-primary grid-item" >Ver</button>
                        </Link>
                    </div>
                    <div className="col-md-1">
                        <button onClick={() => deleteMatch(match.id)} className=" btn btn-danger grid-item" >Eliminar</button>
                    </div>
                </div >
            </Fragment>
        );
}

export default Match;   