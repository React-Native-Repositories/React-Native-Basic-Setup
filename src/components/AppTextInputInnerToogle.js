import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Icon, FormControl, Switch, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AppTextInputToggle({
  icon,
  innerIcon,
  width = '100%',
  label,
  error,
  showError,
  handleIconClicked,
  // inner icon
  innerName,
  innerIconValue,
  onValueChange,
  labelColor,
  ...otherProps
}) {
  Ionicons.loadFont()
  return (
    <View style={styles.container}>
      <FormControl>
        {label && <FormControl.Label style={{color:labelColor}}>{label}</FormControl.Label>}
        <Input
          variant="outline"
          w={{
            base: width,
            md: '25%',
          }}
          InputLeftElement={
            icon && (
              <Icon
                as={<Ionicons name={icon} />}
                size={5}
                ml="2"
                color="muted.400"
                onPress={handleIconClicked}
              />
            )
          }
          InputRightElement={
            <VStack space={4}>
              <Switch
                size="md"
                isChecked={innerIconValue?true:false}
                onValueChange={onValueChange}
                offTrackColor="#E8F0FE"
                onTrackColor="#E8F0FE"
                onThumbColor="#D7242E"
                offThumbColor="#E8F0FE"
              />
            </VStack>
          }
          {...otherProps}
        />
      </FormControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AppTextInputToggle;
