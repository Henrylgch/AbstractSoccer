import React, { Component } from 'react';

import Navbar from '../components/Navbar'

/* Import CSS */
import './../assets/css/CreateMatch.scss'
import MatchForm from '../components/MatchForm';

const stateInicial = {
    name: '',
    place: '',
    type: '',
    date: '',
    time: ''
}

class CreateMatch extends Component {
    state = {
            name: '',
            place: '',
            type: '',
            date: '',
            time: ''
    }

    handleChange = (e) => {
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.newMatch(this.state.name, this.state.place, this.state.type, this.state.date, this.state.time)
        e.preventDefault()
        console.log(this.state)

        this.setState({...stateInicial})
    }



    render(props) {
        return (
            <div className="container-fluid">
                <Navbar />

                <div className='row' >
                    <div className="col-md-8 col-lg-4 mx-auto">
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