import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "./loader.scss";

export class Loader extends Component {
    render() {
        return (
            <div className={"loader "+(this.props.isLoaderShown ? "active" : "")}>
                <img alt="" src="https://lh3.googleusercontent.com/proxy/fmFb6Qkpc-Bp-GaCYKzjekZJKtkTkkg5kSt0Zplsf-r1NzGxUps94JFRSZ8J1-j_5-OXcNmt-i5XHdtBwxKPtHfG-Q"/>
            </div>
        )
    }
}

// PropTypes

Loader.propTypes = {
    isLoaderShown: PropTypes.bool.isRequired
}


export default Loader
