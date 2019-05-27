import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Need the syle of flex: 1 so that the given component 
// will expand to the entire height of the device.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header text={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
