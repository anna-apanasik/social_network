import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'

class ListOfPosts extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.userId !== this.props.userId) {
            this.props.profileInformationActions.getPosts();
        }
        if (nextProps.listOfPosts !== this.props.listOfPosts) {
            return true;
        }
    }

    render() {
        const {userId, listOfPosts} = this.props;
        let list = [];
        if (userId) {
            console.log(this.props.listOfPosts);
            list = listOfPosts.map((item) => <li>{item.title}</li>);
        }
        return (<div>
            <ul>{list}</ul>
        </div>)
    }

}

function mapStateToProps(state) {
    return {
        userId: state.reducerProfileInformation.userId,
        listOfPosts: state.reducerProfileInformation.listOfPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosts)