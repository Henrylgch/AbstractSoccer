import React from 'react';

/* Import CSS */
import './../assets/css/CreateMatch.scss'

/* Import Components */
import MatchForm from '../components/MatchForm';

const CreateMatch = ({createMatch, places}) => {
        return (
            <div className="container-fluid">
                <div className='row' >
                    <div className="col-md-8 col-lg-5 mx-auto">
                        <div className="container-fluid">
                            <h2 className='text-center'>Crear nuevo partido</h2>

                            <div className="row">
                                <div className="col-md-12">
                                    <MatchForm
                                        createMatch={createMatch} 
                                        places={places}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default CreateMatch;