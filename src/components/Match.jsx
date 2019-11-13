import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/Match.scss'


const Match = ({match, deleteMatch}) => {
        return (
            <Fragment>

                <div className="row " >
                    <div className='col-md-12 col-lg-3 d-flex align-items-center' >
                        {match.date}
                    </div>

                    <div className='col-lg col-md-12 d-flex align-items-center'>
                        {match.name}
                    </div>

                    <div className='col-lg-2 d-flex align-items-center'>
                        {match.type}
                    </div>
                    
                    <div className="col-lg-2 mb-2">
                        <Link to={`/match/${match.id}`} >
                            <button className="w-100 btn btn-primary grid-item" >Ver</button>
                        </Link>
                    </div>
                    <div className="col-lg-2 mb-2">
                        <button 
                            onClick={() => deleteMatch(match.id)} 
                            className="w-100 btn btn-danger grid-item" >Eliminar</button>
                    </div>
                </div >
            </Fragment>
        );
}

export default Match;   