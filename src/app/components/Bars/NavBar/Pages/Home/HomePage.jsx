import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import {NOT_FOUND, FOUND_USERS_OR_POSTS} from "constants/actionsConstants";
import NotFound from "./Search/NotFound";
import SuccessFound from "./Search/SuccessFound";


class HomePage extends React.Component {
    render() {
        const {search} = this.props;
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    {search === NOT_FOUND ? <NotFound/> : null}
                    {search === FOUND_USERS_OR_POSTS ? <SuccessFound/> : null}
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        search: state.reducerSearch.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)