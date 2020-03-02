import React, { Component } from 'react'
import "./user-popup.scss";

export class UserPopup extends Component {
    state = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser.call(this, this.state);
    }
    onFieldChange = (propName, e) => {
        const state = {};
        state[propName] = e.target.value;
        this.setState(state);
    }
    validateForm() {
        return this.state.id !== "" && this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.phone !== "";
    }
    render() {
        return (
            <div className="popup-wrap">
                <div className="popup">
                    <div className="close-btn" onClick={this.props.hidePopup.bind(this)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <form className="container" onSubmit={this.onSubmit}>
                        <h3 className="text-center">Add row</h3>
                        <div className="form-group">
                            <label>Id</label>
                            <input
                                type="text"
                                placeholder="Введите id"
                                className="form-control"
                                name="id"
                                onChange={this.onFieldChange.bind(this, "id")}
                                value={this.state.id}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input
                                type="text"
                                placeholder="Enter firstName"
                                className="form-control"
                                name="firstName"
                                onChange={this.onFieldChange.bind(this, "firstName")}
                                value={this.state.firstName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input
                                type="text"
                                placeholder="Enter lastName"
                                className="form-control"
                                name="lastName"
                                onChange={this.onFieldChange.bind(this, "lastName")}
                                value={this.state.lastName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter email"
                                className="form-control"
                                name="email"
                                onChange={this.onFieldChange.bind(this, "email")}
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                placeholder="Enter phone"
                                className="form-control"
                                name="phone"
                                onChange={this.onFieldChange.bind(this, "phone")}
                                value={this.state.phone}
                                required
                            />
                        </div>
                        <button className="btn btn-primary add-row-btn" type="submit" disabled={!this.validateForm()}>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserPopup;
