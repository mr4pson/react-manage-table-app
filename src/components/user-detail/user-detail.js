import React, { Component } from 'react';
import './user-detail.scss';
import PropTypes from "prop-types";

export class userDetail extends Component {
    render() {
        let { firstName, lastName, description, address } = this.props.users.find((user) => user.id === this.props.selectedRowId);
        return (
            <div className="data-datailed bd-example">
                <div>Выбран пользователь: <b>{firstName} {lastName}</b></div>
                <div>
                    Описание:<br />
                    <textarea className="form-control" value={description} onChange={() => { }}></textarea>
                </div>
                <div>
                    Адрес проживания:<b> {address.streetAddress}</b>
                </div>
                <div>
                    Город:<b> {address.city}</b>
                </div>
                <div>
                    Провинция/штат:<b> {address.state}</b>
                </div>
                <div>
                    Индекс:<b> {address.zip}</b>
                </div>
            </div>
        )
    }
}

// PropTypes

userDetail.propTypes = {
    users: PropTypes.array.isRequired,
    selectedRowId: PropTypes.number.isRequired
}

export default userDetail
