import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ButtonsSignUpAndSignIn from "./Buttons/ButtonsSignUpAndSignIn";
import AuthorizedUser from "./Buttons/AuthorizedUser";
import * as actionSearch from 'redux/actions/actionSearch';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: false,
            search: '',
            resetSearch: this.props.resetSearch
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.resetSearch && nextProps.resetSearch) {
            this.props.actionSearch.resetSearch()
        }
    }

    handleSearchChange(e) {
        this.setState({search: e.target.value});
    }

    handleClickHome(e) {
        this.props.actionSearch.resetSearch();
    }

    handleClickSearch(e) {
        e.preventDefault();
        if (this.state.search === '') {
            return;
        }
        this.props.actionSearch.search(this.state.search);
        this.setState({search: ''});
    }

    render() {
        const {success, search} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">The Wall </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/home'> <a className="nav-link" onClick={this.handleClickHome.bind(this)}> Home
                                <span
                                    className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/'><a className="nav-link"> About Wall </a></Link>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"
                                       value={this.state.search}
                                       onChange={this.handleSearchChange.bind(this)}/>
                                <button className="btn btn-outline-primary my-2 my-sm-0"
                                        type="submit"
                                        onClick={this.handleClickSearch.bind(this)}>Search
                                </button>
                            </form>
                        </li>
                    </ul>
                    {success ? <AuthorizedUser/> : <ButtonsSignUpAndSignIn/>}
                    {search ? <Redirect to="/home"/> : null}
                </div>
            </nav>
        );
    }
}

NavBar.PropTypes = {
    resetSearch: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        success: state.reducerSignIn.success,
        search: state.reducerSearch.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
