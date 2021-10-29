import React from 'react';
import type {Node} from 'react';
import {Webview} form 'react-native-webview'
const App: () => Node = () => {
  return (
   <Webview source={{uri: 'https://postmalone.shop/'}}/>
  );
};
export default App;