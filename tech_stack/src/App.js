import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    const {appStyles} = styles;
    // The provider tag works together with the store.
    // The store contains pieces of application state.
    // The provider is communication glue with react.
    return (
        <Provider store={createStore(reducers)}>
            <View style={appStyles}>
                <Header text="Tech Stack"/>
                <LibraryList/>
            </View>
        </Provider>
    );
};

const styles = {
    appStyles: {

        // This style on a container view makes the view stretch to 100% height
        flex: 1
    }
};

export default App;
