import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "./user-table.scss";

class UserTable extends Component {
    onSort = (i, e) => {
        const sortStates = this.props.sortStates;
        switch (sortStates[i].state) {
            case 0:
                sortStates[i].state = 1;
                const sortStateIndex = sortStates.findIndex((sortState, key) => sortState.state !== 0 && key !== i);
                if (sortStates[sortStateIndex]) {
                    sortStates[sortStateIndex].state = 0;
                }
                break;

            case 1:
                sortStates[i].state = 2;
                break;
            case 2:
                sortStates[i].state = 1;
                break;
        }
        this.props.onSortClick.call(this, sortStates);
    }
    render() {
        return (
            <table className="table user-table">
                <thead className="thead-dark">
                    <tr>
                        {this.props.columnNames.map((columnName, i) => {
                            return (
                                <th
                                    key={i}
                                    onClick={this.onSort.bind(this, i)}
                                >
                                    {columnName}
                                    {this.props.sortStates[i] && this.props.sortStates[i].state === 1 ? <span className="carrot"><i className="fa fa-angle-up" aria-hidden="true"></i></span> : ""}
                                    {this.props.sortStates[i] && this.props.sortStates[i].state === 2 ? <span className="carrot"><i className="fa fa-angle-down" aria-hidden="true"></i></span> : ""}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.length > 0 ? this.props.users.map((user, i) => {
                        return (
                            <tr
                                key={i}
                                onClick={this.props.onUserSelect.bind(this, user.id)}
                                className={user.id === this.props.selectedRowId ? "active" : ""}
                            >
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    }) : <tr><td>Данных нет</td></tr>}
                </tbody>
            </table>
        );
    }
}

// PropTypes

UserTable.propTypes = {
    sortStates: PropTypes.array.isRequired,
    columnNames: PropTypes.array.isRequired,
    onSortClick: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    onUserSelect: PropTypes.func.isRequired
}


export default UserTable;
