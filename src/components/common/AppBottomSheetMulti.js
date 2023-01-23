import {StyleSheet, View} from 'react-native';
import React from 'react';
import RBSheet from './AppBottomSheet';
import {ThemeColors} from '@theme';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {Checkbox, ScrollView} from 'native-base';
import AppText from '../AppText';
import {hp} from '@utils/dimensions';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import {getValue} from '@utils/lodash';
import _ from 'lodash';

export default function AppBottomSheetMulti(props) {
  const {isThemeDark} = useThemeToggler();
  const {refRBSheetMulti, multiDropdownItems} = props;
  return (
    <RBSheet
      ref={refRBSheetMulti}
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
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {getValue(multiDropdownItems, `length`, 0) > 0 &&
          multiDropdownItems.map((item, index) => {
            if (
              typeof getValue(
                props,
                `request[${props.selectedDropdownItem}]`,
                '',
              ) !== 'string'
            ) {
              let checkedList =
                getValue(
                  props,
                  `request[${props.selectedDropdownItem}].length`,
                  0,
                ) > 0
                  ? getValue(
                      props,
                      `request[${props.selectedDropdownItem}]`,
                      [],
                    ).map(item => item.id)
                  : [];
              return (
                <>
                  <View
                    style={[
                      styles.container,
                      // {
                      //   backgroundColor:
                      //     index === 0
                      //       ? isThemeDark
                      //         ? ThemeColors.darkMode.menubarSecondory
                      //         : '#E8F0FE'
                      //       : '',
                      // },
                    ]}
                    key={index}
                    >
                    <View style={styles.viewContainer}>
                      <View style={{marginRight: hp(8)}}>
                        <Checkbox
                          value={item.id}
                          isChecked={
                            getValue(checkedList, `length`, 0) > 0 &&
                            checkedList.includes(item.id)
                          }
                          colorScheme="info"
                          accessibilityLabel="info"
                          onChange={() =>
                            props.onchangeMultiDropdown(
                              props.selectedDropdownItem,
                              item,
                            )
                          }
                        />
                      </View>
                      <View>
                        <AppText
                          style={[
                            styles.dropdownOption,
                            {
                              color: isThemeDark
                                ? ThemeColors.darkMode.primaryText
                                : '#5F6368',
                            },
                          ]}>
                          {getValue(item, `name`, '')}
                        </AppText>
                        <AppText
                          style={{
                            color: isThemeDark
                              ? ThemeColors.darkMode.secondaryText
                              : '#5F6368',
                            fontSize: RFValue(12),
                          }}>
                          {getValue(item, `email`, '')}
                        </AppText>
                      </View>
                    </View>
                  </View>
                </>
              );
            }
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
  container: {
    height: hp(56),
    flexWrap: 'wrap',
  },
  viewContainer: {
    marginLeft: hp(28),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownView: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownOption: {
    alignItems: 'center',
    fontSize: RFValue(14),
  },
});
