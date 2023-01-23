import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Icon, FormControl, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeColors} from '../../theme';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';
import useThemeToggler from '../../theme/hooks/useThemeToggler';

function AppTextInput({
  icon,
  innerIcon,
  width = '100%',
  label,
  error,
  showError,
  handleIconClicked,
  handleInnerIconClicked,
  isRequired,
  ...otherProps
}) {
  Ionicons.loadFont();
  const {isThemeDark} = useThemeToggler();
  return (
    <View style={styles.container}>
      <FormControl>
        {label && (
          <FormControl.Label>
            <Text
              style={{
                color: isThemeDark
                  ? ThemeColors.darkMode.secondaryText
                  : ThemeColors.lightMode.inputLabelColor,
                fontSize: RFValue(12),
                fontFamily: 'GoogleSans-Regular',
              }}>
              {label}<Text style={{color:ThemeColors.common.red}}>{' '}{isRequired?'*':''}</Text>
            </Text>
          </FormControl.Label>
        )}
        <Input
          // variant="outline"
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
            innerIcon && (
              <Icon
                as={<Ionicons name={innerIcon} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={handleInnerIconClicked}
              />
            )
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

export default AppTextInput;
