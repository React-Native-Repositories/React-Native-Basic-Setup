import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '@theme';
import ArrowDownSvgComponent from '@assets/svg/common/arrow-down';
import CloseSvgComponent from '@assets/svg/common/close';
import AppText from './AppText';
import {hp, wp} from '@utils/dimensions';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {getValue} from '@utils/lodash';

export default function AppCustomMultiDropdown(props) {
  const {isThemeDark} = useThemeToggler();
  const {handleOpenMultiDropdown} = props;
  return (
    <View
      style={{
        minHeight: hp(286),
        borderColor: isThemeDark
          ? ThemeColors.lightMode.inputBorder
          : ThemeColors.lightMode.inputBorder,
        borderWidth: isThemeDark ? 0.3 : 1,
        marginTop: hp(4),
        alignItems: 'center',
      }}>
      <Pressable
        unstable_pressDelay={0}
        onPress={() => handleOpenMultiDropdown(props.name)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: hp(56),
          // paddingLeft: hp(24),
          borderColor: !isThemeDark
            ? ThemeColors.lightMode.background
            : ThemeColors.darkMode.background,
          borderBottomColor: isThemeDark
            ? ThemeColors.lightMode.inputBorder
            : ThemeColors.lightMode.inputBorder,
          borderWidth: isThemeDark ? 0.3 : 1,
          width: '90%',
          alignItems: 'center',
        }}>
        <AppText
          style={{
            color: isThemeDark
              ? ThemeColors.darkMode.secondaryText
              : ThemeColors.lightMode.placeholderTextColor,
            fontSize: RFValue(12),
          }}>
          {getValue(props, `placeholder`, '')}
        </AppText>
        <ArrowDownSvgComponent style={[styles.icon, {marginRight: hp(0)}]} />
      </Pressable>
      <View
        style={{
          alignSelf: 'flex-start',
          marginTop: hp(25),
          borderRadius: hp(15),
          marginLeft: hp(12),
          marginRight: hp(12),
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {getValue(props, `request[${props.name}]`, '') &&
          getValue(props, `request[${props.name}].length`, 0) > 0 &&
          getValue(props, `request[${props.name}]`, []).map((item,index) => {
            return (
              <View
                key={index}
                style={{
                  height: hp(34),
                  minWidth: wp(83),
                  backgroundColor: isThemeDark
                    ? ThemeColors.darkMode.background
                    : '#E8F0FE',
                  borderColor: isThemeDark
                    ? ThemeColors.lightMode.inputBorder
                    : '#E8F0FE',
                  borderWidth: 0.18,
                  justifyContent: 'center',
                  borderRadius: hp(15),
                  marginBottom: hp(8),
                  marginLeft: hp(4),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{
                      color: ThemeColors.common.blue,
                      marginLeft: hp(8),
                      fontSize: RFValue(12),
                    }}>
                    {getValue(item, `name`, '')}
                  </AppText>
                  <TouchableOpacity
                    delayPressIn={0}
                    onPress={() =>
                      props.onchangeMultiDropdown(props.name, item)
                    }>
                    <CloseSvgComponent
                      style={{marginRight: hp(8)}}
                      color={ThemeColors.common.blue}
                      height={hp(18)}
                      width={wp(18)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
