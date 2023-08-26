import React from 'react';
import {Image, ScrollView} from 'react-native';
import cakeImg from '../../assets/images/cake.png';

const ScrollViewComp = () => {
  return (
    <ScrollView>
      <ScrollView
        style={{backgroundColor: 'lightblue'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal>
        <Image source={cakeImg} style={{width: 500, height: 500}} />
        <Image source={cakeImg} style={{width: 500, height: 500}} />
      </ScrollView>
    </ScrollView>
  );
};

export default ScrollViewComp;
