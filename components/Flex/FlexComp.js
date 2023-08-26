import React from 'react';
import {Text, View} from 'react-native';

const FlexComp = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'lightyellow',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          // flex: 2,
          backgroundColor: 'lightgreen',
          width: 50,
          // height: 50,
        }}></View>
      <View
        style={{
          // flex: 3,
          backgroundColor: 'lightblue',
          width: 50,
          height: 50,
        }}></View>
      <View
        style={{
          // flex: 4,
          backgroundColor: 'plum',
          width: 50,
          height: 50,
        }}></View>
    </View>
  );
};

export default FlexComp;
