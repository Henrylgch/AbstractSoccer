import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/Match.scss'


class Match extends Component {
    render() {
        return (
            <div className="row container-fluid" >
                <div className='col-md-2' >
                    <p>{this.props.date}</p>
                </div>

                <div className='col-md-4'>
                    <p>{this.props.name}</p>
                </div>

                <div className='col'>
                    <p>{this.props.type}</p>
                </div>
                
                <div className="col-md-1">
                    <Link to={`/match/${this.props.id}`} >
                        <button className="btn btn-primary grid-item" >Ver</button>
                    </Link>
                </div>
                <div className="col-md-1">
                    <button onClick={() => this.props.deleteMatch(this.props.id)} className=" btn btn-danger grid-item" >Eliminar</button>
                </div>
            </div >
        );
    }
}

export default Match;   