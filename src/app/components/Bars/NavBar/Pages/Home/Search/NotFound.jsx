import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';

class NotFound extends React.Component {
    componentDidUpdate() {
        this.props.actionSearch.resetSearch();
    }

    render() {
        return (
            <div className="container">
                <h2 className="display-3">Not found...</h2>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(NotFound);