import React from 'react'
import { NativeBaseProvider } from 'native-base';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  )
}

export default App;

