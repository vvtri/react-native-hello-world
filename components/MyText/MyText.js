import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
  return <Text style={[{color: 'blue'}, style.text]}>MyText</Text>;
};

export default MyText;
