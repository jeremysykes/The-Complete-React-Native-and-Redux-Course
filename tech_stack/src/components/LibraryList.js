import React, { Component } from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return (<Text>{'Stuff goes here'}</Text>);
    }
}

// Takes application state and map it to props for our component
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// Calls connect which returns another function, which we immediately call passing the library list
export default connect(mapStateToProps)(LibraryList);
