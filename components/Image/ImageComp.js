import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import cakeSrc from '../../assets/images/cake.png';

const ImageComp = () => {
  const [imgSrc, setImgSrc] = useState({uri: 'https://example.com'});

  return (
    <View style={{backgroundColor: 'lightblue'}}>
      <Pressable accessible={false} onPress={() => alert('press')}>
        <Image
          source={imgSrc}
          onError={() => setImgSrc(cakeSrc)}
          style={{width: 100, height: 200}}
          resizeMode="contain"
          accessible={false}
        />
      </Pressable>

      <Image source={cakeSrc} style={{marginTop: 10}} resizeMode="repeat" />
    </View>
  );
};

export default ImageComp;
