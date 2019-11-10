import React, { Component, Fragment } from 'react';

class DetailField extends Component {
    render() {
        return (
            <Fragment>
                <p className="m-1" > 
                    <span className="font-weight-bold" >{this.props.name}:</span> {this.props.content} 
                </p>
            </Fragment>
        );
    }
}

export default DetailField;