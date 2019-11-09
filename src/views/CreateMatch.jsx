import React, { Component } from 'react';

import Navbar from '../components/Navbar'

/* Import CSS */
import './../assets/css/CreateMatch.scss'
import MatchForm from '../components/MatchForm';

class CreateMatch extends Component {



    render() {
        return (
            <div className="container-fluid">
                <Navbar />

                <div className='row' >
                    <div className="col-md-8 col-lg-5 mx-auto">
                        <div className="container-fluid">
                            <h2 className='text-center'>Crear nuevo partido</h2>

                            <div className="row">
                                <div className="col-md-12">
                                    <MatchForm
                                        createMatch={this.props.createMatch} 
                                        places={this.props.places}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMatch;