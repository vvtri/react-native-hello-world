import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const Item = ({name, price}) => {
  const handlePress = () => {
    alert('Click ');
  };

  return (
    <Text onPress={handlePress}>
      Item {name} - Price: {price}
    </Text>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
