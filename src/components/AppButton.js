import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

function AppButton({title, onPress, ...otherProps}) {
  return (
    <Button onPress={onPress} style={styles.button} {...otherProps}>
      <Text style={{color: otherProps.color}}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default AppButton;
