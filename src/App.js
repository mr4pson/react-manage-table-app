import axios from "axios";
import React, { Component } from 'react';
import "./App.scss";
import Pagination from './components/pagination/pagination';
import SearchBar from './components/search-bar/search-bar';
import UserDetail from './components/user-detail/user-detail';
import UserPopup from './components/user-popup/user-popup';
import UsertTable from './components/user-table/user-table';
import Loader from './components/loader/loader';
import config from "./config";
import { sliceData, sortAsc, sortDesc } from './utils/utils';

class App extends Component {
    state = {
        users: [],
        slicedData: [],
        page: 0,
        selectedRowId: null,
        searchQuery: "",
        isPopupShown: false,
        columnNames: [],
        sortStates: []
    }

    componentDidMount() {
        axios.get(config.endpoint).then((res) => {
            this.setState({ users: res.data, slicedData: sliceData(res.data) });
            const state = { columnNames: Object.keys(this.state.users[0]).splice(0, 5) };
            this.setState(state);
            let sortStates = [];
            this.state.columnNames.forEach(columnName => {
                sortStates.push({
                    state: 0
                });
            });
            this.setState({ sortStates: sortStates });
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log("Ошибка сервера");
        });
    }

    getCurrentPageData() {
        return this.state.slicedData[this.state.page] ? this.state.slicedData[this.state.page] : [];
    }

    onPageChange = (pageIndex) => {
        this.setState({ page: pageIndex });
    }

    onSortClick = (sortStates) => {
        this.setState({ sortStates: sortStates });
        this.sortUsers();
    }

    sortUsers = () => {
        this.state.columnNames.forEach((keyName, i) => {
            switch (this.state.sortStates[i].state) {
                case 0:
                    // this.state.users;
                    break;
                case 1:
                    this.setState({ slicedData: sliceData(this.state.users.sort(sortAsc.bind(this, keyName))) });
                    break;

                case 2:
                    this.setState({ slicedData: sliceData(this.state.users.sort(sortDesc.bind(this, keyName))) })
                    break;
                default:
                    break;
            }
        });
    }

    onUserSelect = (id) => {
        this.setState({ selectedRowId: id });
    }

    onSearch = (searchQuery) => {
        this.setState({ searchQuery: searchQuery });
        const filteredData = this.state.users.filter((dataItem) => {
            let hits = 0;
            this.state.columnNames.forEach((columnName) => {
                if (dataItem[columnName].toString().toLowerCase().indexOf(searchQuery.toString().toLowerCase()) !== -1) {
                    hits++;
                }
            });
            return (hits > 0);
        });
        this.setState({ slicedData: searchQuery ? sliceData(filteredData) : sliceData(this.state.users) });
    }

    hidePopup = () => {
        this.setState({ isPopupShown: false });
    }

    showPopup = () => {
        this.setState({ isPopupShown: true });
    }

    addUser = (user) => {
        user.description = "";
        user.address = {
            streetAddress: "",
            city: "",
            state: "",
            zip: ""
        };
        const users = this.state.users;
        users.push(user);
        this.setState({ users: users });
        this.onSearch(this.state.searchQuery);
        this.hidePopup();
    }

    render() {
        return (
            <div className="container-fluid">
                <SearchBar onSearch={this.onSearch} />
                <div className="btn btn-primary float-right mb-3" onClick={this.showPopup}>Добавить</div>
                {this.state.users.length > 0 ? <UsertTable
                    users={this.getCurrentPageData()}
                    onUserSelect={this.onUserSelect}
                    selectedRowId={this.state.selectedRowId}
                    columnNames={this.state.columnNames}
                    sortStates={this.state.sortStates}
                    onSortClick={this.onSortClick}
                /> : null}
                <Pagination
                    slicedData={this.state.slicedData}
                    page={this.state.page}
                    onPageChange={this.onPageChange}
                />
                {this.state.selectedRowId ? <UserDetail users={this.state.users} selectedRowId={this.state.selectedRowId} /> : ""}
                {this.state.isPopupShown ? <UserPopup hidePopup={this.hidePopup} addUser={this.addUser} /> : ""}
                <Loader isLoaderShown={this.state.users.length === 0}/>
            </div>
        );
    }
}

export default App;
