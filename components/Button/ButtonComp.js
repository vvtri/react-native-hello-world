import React, {useState, useEffect} from 'react';
import {Pressable, Switch, Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const ButtonComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email.length === 0 || password.length < 8) setIsValid(false);
    else setIsValid(true);
  }, [email, password]);

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={e => setEmail(e)}
        keyboardType="email-address"
        placeholder="Email"
        style={{borderWidth: 1}}
      />
      <TextInput
        value={password}
        onChangeText={e => setPassword(e)}
        secureTextEntry
        placeholder="Password"
        style={{borderWidth: 1, marginVertical: 20}}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Switch value={isRemember} onValueChange={e => setIsRemember(e)} />
        <Text>Keep me logged in</Text>
      </View>

      <Pressable
        onPress={() => {
          console.log('email', email);
          console.log('password', password);
          console.log('isRemember', isRemember);
        }}
        style={[
          {backgroundColor: 'plum'},
          !isValid && {backgroundColor: 'grey', opacity: 0.5},
        ]}
        disabled={!isValid}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingVertical: 5,
              marginRight: 5,
            }}>
            Submit
          </Text>
          <FontAwesomeIcon icon={faCheck} />
        </View>
      </Pressable>
    </View>
  );
};

export default ButtonComp;
