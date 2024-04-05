import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './navigation/MainContainer'
import InsideContainer from './navigation/InsideContainer';

const App = () => {
  return (
    <NavigationContainer>
      <MainContainer/>
    </NavigationContainer>
  )
}

export default App
