import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import OnePhoto from 'app/components/Cloudinary/OnePhoto'

const styles = {
    text: {
        marginLeft: "15px"
    },
    right: {
        //  marginLeft: "500px"
        textAlign: "center"
    },
    photos: {
        margin: "10px"
    }
};

class OnePostSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: this.props.noteId,
            userId: this.props.userId
        }
        // new Promise(this.props.actionSearch.getPhotos(this.props.noteId))
        //     .then(() => {
        //         console.log('then')
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     })
    }

    //componentWillMount() {

    // console.log( this.props.userId+' '+this.state.userId)
    //   console.log('componentWillMount for ' + this.state.noteId)
    // console.log(this.props.photos)
    // this.setState({
    //     noteId: this.props.noteId,
    //     userId: this.props.userId
    // })

    // this.props.actionSearch.getLogin(this.state.userId);
    // this.props.actionSearch.getPhotos(this.state.noteId);


    //  }

//componentDidMount(){
    // console.log('componentDidMount uderig')
    // console.log( ' '+this.state.userId)
    // this.setState({
    //     noteId: '',
    //     userId: ''
    // })
    //  console.log( ' after'+this.state.userId)
//}
//     componentWillReceiveProps(nextProps) {
//         // console.log('will receive')
//         // if (nextProps.login !== undefined) {
//         //     console.log(nextProps.login + ' ' + this.props.login)
//         //     this.setState({login: nextProps.login})
//         // }
//         //console.log('will noteid')
//         // console.log(nextProps.noteId+' '+this.state.noteId)
//         // if(nextProps.userId!==this.state.userId){
//         //
//         //
//         // }
//         this.setState({
//             noteId: nextProps.noteId,
//             userId: nextProps.userId
//         })
//         //
//         //
//     }

    render() {
        const {title, text, photos} = this.props;
        return (<div className="card border-info mb-3">
            <form className="form-group" style={styles.text}>
                <h4 className="card-title">{title}</h4>
            </form>
            <p className="card-text" style={styles.text}>{text}</p>
            <form className="form-inline" style={styles.photos}>
                {photos.map(item =>
                    item ? <OnePhoto public_id={item.photo} width={'50'} height={'50'}/> : null
                )}
            </form>
        </div>)
    }
}

OnePostSearch.PropTypes = {
    noteId: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired

};

function mapStateToProps(state) {
    return {
        photos: state.reducerSearch.photos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

//TODO photos or delete all what is connected with photos
export default connect(mapStateToProps, mapDispatchToProps)(OnePostSearch);
// {photos.map(item =>
//item ? <OnePhoto public_id={item.photo} width={'50'} height={'50'}/> : null
//)}
// <form className="form-inline">
//<label className="form-text text-muted ">by&nbsp;</label>
//<label className="form-text"> {this.state.login}</label>
//</form>