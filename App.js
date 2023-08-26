import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FlexComp from './components/Flex/FlexComp';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlexComp />
    </SafeAreaView>
  );
};

export default App;
