import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Icon, FormControl, Text, TextArea} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeColors} from '../../theme';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';
import useThemeToggler from '../../theme/hooks/useThemeToggler';

function AppTextArea({
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
        <TextArea
          // variant="outline"
          w={{
            base: width,
            md: '25%',
          }}
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

export default AppTextArea;
