import React, { Component, Fragment } from 'react';

class Fields extends Component {
    render() {
        return (
            <Fragment>
                <p>{this.props.field}</p>
            </Fragment>
        );
    }
}

export default Fields;