import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "./loader.scss";

export class Loader extends Component {
    render() {
        return (
            <div className={"loader "+(this.props.isLoaderShown ? "active" : "")}>
                <img alt="" src="./images/loading.gif"/>
            </div>
        )
    }
}

// PropTypes

Loader.propTypes = {
    isLoaderShown: PropTypes.bool.isRequired
}


export default Loader
