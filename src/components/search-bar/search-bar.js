import React, { Component } from 'react'
import './search-bar.scss';
import PropTypes from "prop-types";

export class SearchBar extends Component {
    state = {
        searchQuery: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch.call(this, this.state.searchQuery);
    }

    onSearchQueryChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        placeholder="Введите фразу"
                        type="text"
                        value={this.state.searchQuery}
                        onChange={this.onSearchQueryChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Поиск</button>
                    </div>
                </div>
            </form>
        )
    }
}

// PropTypes

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;
