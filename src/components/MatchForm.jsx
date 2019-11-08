import React, { Component } from 'react';
import uuid from 'uuid'


class MatchForm extends Component {
    state = {
        places: this.props.places,
        match: {
            name: '',
            place: 'Enasport',
            type: 'Futbol',
            date: '',
            time: ''
        },
        error: false
    }


    // Cuando el usuario rellena el formulario
    handleChange = e => {
        //Setear el state
        this.setState({
            match: {
                ...this.state.match,
                [e.target.name]: e.target.value
            }
        })
    }

    // Cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        const stateDefault = {
            places: this.props.places,
            match: {
                name: '',
                place: 'Enasport',
                type: 'Futbol',
                date: '',
                time: ''
            },
            error: false
        }

        // Extraer valores del state
        const { name, place, type, date, time } = this.state.match

        // Validar formulario
        if (name === '' || place === '' || type === '' || date === '' || time === '') {
            this.setState ({error: true})
            console.log(this.state.error)
            // Detenemos el codigo
            return;
        }

        // Copiar los datos
        const newMatch = {...this.state.match}
        newMatch.id = uuid()

        // Agregar
        this.props.createMatch(newMatch)

        // Devolver state al inicial
        this.setState({
            ...stateDefault
        })
    }

    render() {
        const { error } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                {error ? <div className="alert alert-danger mt-3 mb-3 text center">Rellenar todos los campos</div> : null}

                <div className="form-group">
                    <input 
                        type="text"
                        name="name"
                        className="form-control" 
                        placeholder="Nombre del partido"
                        onChange={this.handleChange}
                        value={this.state.match.name}
                    />
                </div>

                <div className="form-group">
                    <select 
                        value={this.state.match.place}
                        name="place" 
                        onChange={this.handleChange}  
                        className="form-control"
                    >
                        {this.props.places.map( field => {
                            return (
                                <option value={field.id} key={field.ID} >{field.nombre}</option>
                            )
                        } )}
                    </select>
                </div>

                <div className="form-group">
                    <select 
                        value={this.state.match.type} 
                        name="type" 
                        onChange={this.handleChange} 
                        className="form-control" 
                    >
                        <option value="Futbol">Fútbol - 11 contra 11. (22 personas)</option>
                        <option value="Futbolito">Futbolito - 7 contra 7. (14 personas)</option>
                        <option value="Baby Futbol">Baby Fútbol - 5 contra 5. (10 personas)</option>
                    </select>
                </div>

                <div className="row form-group">
                    <div className="col-md-6">
                        <input 
                            type="date"
                            value={this.state.match.date} 
                            onChange={this.handleChange} 
                            name="date" 
                            className="form-control" 
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            value={this.state.match.time} 
                            onChange={this.handleChange} 
                            name="time" 
                            className="form-control" 
                            type="time"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md 3">
                        <input 
                            type="submit" 
                            value="Guardar partido" 
                            className="btn btn-success"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default MatchForm;