import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {getValue} from '@utils/lodash';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {ThemeColors} from '@theme';
import {hp} from '@utils/dimensions';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import CalenderSvgComponent from '@assets/svg/common/calender';

export default function AppCustomDateComponent(props) {
  const {isThemeDark} = useThemeToggler();
  return (
    <View>
      <AppText
        style={[
          styles.label,
          {
            color: isThemeDark
              ? ThemeColors.darkMode.secondaryText
              : ThemeColors.lightMode.inputLabelColor,
            marginTop: hp(16),
          },
        ]}>
        {getValue(props, `label`, '')}
      </AppText>
      <Pressable
        //   onPress={() => props.handleClickDropdown(props.name)}
        unstable_pressDelay={0}
        style={[
          styles.select,
          {
            backgroundColor: isThemeDark
              ? ThemeColors.darkMode.background
              : ThemeColors.lightMode.background,
            borderColor: isThemeDark
              ? ThemeColors.lightMode.inputBorder
              : ThemeColors.lightMode.inputBorder,
            borderWidth: isThemeDark ? 0.18 : 1,
          },
        ]}>
        <AppText
          style={[
            styles.label,
            {
              color: isThemeDark
                ? ThemeColors.darkMode.secondaryText
                : ThemeColors.lightMode.placeholderTextColor,
              alignSelf: 'center',
            },
          ]}>
          {getValue(props, `request.close_date`, '')
            ? getValue(props, `request.close_date`, '')
            : getValue(props, `placeholder`, '')}
        </AppText>
        {
          props.icon?
          props.icon:
        
        <CalenderSvgComponent style={styles.icon} />
}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingLeft: hp(24),
    height: hp(56),
    borderRadius: 2,
    fontSize: RFValue(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: hp(6),
    fontSize: RFValue(12),
  },
  icon: {
    marginRight: hp(16),
    alignSelf: 'center',
  },
});
