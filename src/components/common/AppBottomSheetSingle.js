import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from './AppBottomSheet';
import {ThemeColors} from '@theme';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {ScrollView} from 'native-base';
import DoneSvgComponent from '@assets/svg/common/done';
import AppText from '../AppText';
import {hp} from '@utils/dimensions';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import {getValue} from '@utils/lodash';

export default function AppBottomSheetSingle(props) {
  const {isThemeDark} = useThemeToggler();

  const {
    refRBSheet,
    dropdownItems,
    onChangeDropdown,
    selectedDropdownItem,
  } = props;
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={hp(500)}
      backgroundColor={
        isThemeDark
          ? ThemeColors.darkMode.menubarPrimary
          : ThemeColors.lightMode.background
      }
      isThemeDark={isThemeDark}
      customStyles={{
        wrapper: {
          // backgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {getValue(dropdownItems, `length`, 0) > 0 &&
          dropdownItems.map((item, index) => {
            return (
              <Pressable
              key={index}
              unstable_pressDelay={0}
                style={[
                  styles.dropdownView,
                  {
                    backgroundColor:
                      getValue(
                        props,
                        `request[${selectedDropdownItem}].id`,
                        '',
                      ) === getValue(item, `id`, '')
                        ? isThemeDark
                          ? ThemeColors.darkMode.menubarSecondory
                          : '#E8F0FE'
                        : '',
                  },
                ]}
                onPress={() =>
                  onChangeDropdown(
                    selectedDropdownItem,
                    item,
                  )
                }>
                <AppText style={styles.dropdownOption}>
                  {getValue(item, `name`, '')}
                </AppText>
                {getValue(props, `request[${selectedDropdownItem}].id`, '') ===
                  getValue(item, `id`, '') && (
                  <DoneSvgComponent style={{marginRight: hp(28)}} />
                )}
              </Pressable>
            );
          })}
      </ScrollView>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: hp(16),
    alignSelf: 'center',
  },
  dropdownView: {
    marginTop: hp(2),
    height: hp(56),
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownOption: {
    marginLeft: hp(52),
    alignItems: 'center',
    color: '#1A73E8',
    fontSize: RFValue(12),
  },
});
