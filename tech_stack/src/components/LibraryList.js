import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library}/>
    }
    
    render() {
        return (
        <FlatList 
            data={this.props.libraries} 
            renderItem={this.renderItem}
            keyExtractor={(library) => library.id}/>
        );
    }
}

// Takes application state and map it to props for our component
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// Calls connect which returns another function, which we immediately call passing the library list
export default connect(mapStateToProps)(LibraryList);
