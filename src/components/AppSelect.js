import React from 'react';
import {Box, CheckIcon, FormControl, Select, View, VStack} from 'native-base';
import {StyleSheet} from 'react-native';

function AppSelect({
  items = [],
  name,
  value,
  label,
  placeholder,
  width,
  onChange,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <Box>
        <FormControl>
          {label && <FormControl.Label>{label}</FormControl.Label>}
          <Select
            selectedValue={value}
            minWidth="150"
            width={width}
            accessibilityLabel={placeholder}
            placeholder={placeholder}
            _selectedItem={{
              bg: '#D7242E',
              _text: {color: 'white'},
              endIcon: (
                <VStack space={4}>
                  <CheckIcon size="25" color={'white'} />
                </VStack>
              ),
            }}
            onValueChange={itemValue => onChange(name, itemValue)}
            {...otherProps}>
            {items.map((item, index) => (
              <Select.Item
                label={item.label}
                value={item.id}
                key={index.toString()+item.id}
              />
            ))}
          </Select>
        </FormControl>
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
export default AppSelect;
