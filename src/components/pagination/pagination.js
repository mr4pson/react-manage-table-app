import React, { Component } from 'react'
import './pagination.scss';
import PropTypes from "prop-types";

export class Pagination extends Component {
    getPageNumber(pageIndex) {
        return pageIndex + 1;
    }

    render() {
        return (
            <ul className="pagination">
                {this.props.slicedData.map((pageData, pageIndex) => {
                    return (
                        <li
                            key={pageIndex}
                            className={pageIndex === this.props.page ? "page-item active" : "page-item"}
                        >
                            <button
                                className="page-link"
                                onClick={this.props.onPageChange.bind(this, pageIndex)}
                            >{this.getPageNumber(pageIndex)}</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

// PropTypes

Pagination.propTypes = {
    slicedData: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
