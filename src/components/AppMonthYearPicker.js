import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Platform,
} from 'react-native';
import {Modal} from 'native-base';
import {hp, wp} from '@utils/dimensions';
import AppText from './AppText';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {getValue} from '@utils/lodash';
import {ThemeColors} from '@theme';
import moment from 'moment';
import AnimatedPressable from './AppAnimatedPressable';
import AppIcon from './AppIcon';

const MonthYearPicker = props => {
  /* -------------------------------------------------------------------------- */
  /*                                 Theme Section                              */
  /* -------------------------------------------------------------------------- */

  const isTheme = useThemeToggler();
  const isThemeDark = getValue(isTheme, `isThemeDark`, false);

  /* -------------------------------------------------------------------------- */
  /*                                 Usestate Section                              */
  /* -------------------------------------------------------------------------- */
  const month_data = [
    {key: 1, name: 'January'},
    {key: 2, name: 'February'},
    {key: 3, name: 'March'},
    {key: 4, name: 'April'},
    {key: 5, name: 'May'},
    {key: 6, name: 'June'},
    {key: 7, name: 'July'},
    {key: 8, name: 'August'},
    {key: 9, name: 'September'},
    {key: 10, name: 'October'},
    {key: 11, name: 'November'},
    {key: 12, name: 'December'},
  ];

  const {width, height} = Dimensions.get('window');

  const [month, setMonth] = useState(month_data[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  //   useEffect(() => {
  //     // props.onChangeYear(year);
  //     // props.onChangeMonth(month_data[new Date().getMonth()]);
  //     props.onChangeMonthYear(month_data[new Date().getMonth()].key,year)
  //   });
  useEffect(() => {
    let dates = props.value ? props.value : new Date();
    setMonth({key: moment(dates).format('M')});
    setYear(parseInt(moment(dates).format('YYYY')));
  }, []);

  const handleSubmit = (month, year) => {
    let date = `${year}-${month < 10 ? '0' : ''}${month}-01`;
    props.onChangeMonthYear(new Date(date));
  };

  return (
    <Modal
      // animationType="slide"
      transparent={true}
      isOpen={props.isShow}
      onClose={props.close}>
      <TouchableHighlight
        style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}
        onPress={props.close}>
        <View />
      </TouchableHighlight>

      <View
        style={{
          backgroundColor: isThemeDark ? ThemeColors.dark.headerColor : 'white',
        }}>
        {/* <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            marginTop: 10,
          }}>
          <AnimatedPressable
            delayPressIn={0}
            style={{marginRight: 10}}
            onPress={() => props.close()}>
            <AppIcon
              name="close-circle"
              size={hp(25)}
              color={isThemeDark ? 'white' : '#5F6368'}
            />
          </AnimatedPressable>
          <AnimatedPressable
            delayPressIn={0}
            style={{marginRight: 20}}
            onPress={() => handleSubmit(month, year)}>
            <AppIcon
              name={'checkmark-circle'}
              size={hp(25)}
              color={'#15803d'}
            />
          </AnimatedPressable>
        </View> */}
        <View style={styles.yearContainer}>
          <TouchableOpacity
           delayPressIn={0}
            onPress={() => {
              setYear(year - 1);
              //   handleSubmit(month.key, parseInt(year) - 1);
            }}>
            <AppText
              style={{
                fontFamily: 'GoogleSans-Medium',
                color: isThemeDark ? 'white' : 'black',
              }}>
              Prev
            </AppText>
          </TouchableOpacity>
          <Text
            style={[
              styles.yearLabel,
              {
                color: isThemeDark ? 'white' : 'black',
              },
            ]}>
            {year}
          </Text>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              setYear(year + 1);
              //   handleSubmit(month.key, parseInt(year) + 1);
            }}>
            <AppText
              style={{
                fontFamily: 'GoogleSans-Medium',
                color: isThemeDark ? 'white' : 'black',
              }}>
              Next
            </AppText>
          </TouchableOpacity>
        </View>
        <View style={[styles.monthContainer]}>
          {month_data.map((item, index) => (
            <TouchableOpacity
              delayPressIn={0}
              key={index}
              onPress={() => {
                setMonth(item);
                handleSubmit(item.key, year);
              }}
              style={[
                styles.month,
                {
                  width: width / 3,
                  backgroundColor:
                    item.key == month.key
                      ? isThemeDark
                        ? 'black'
                        : '#E8F0FE'
                      : isThemeDark
                      ? ThemeColors.dark.headerColor
                      : 'white',
                },
              ]}>
              <AppText
                style={{
                  color: isThemeDark ? 'white' : 'black',
                  fontFamily: 'GoogleSans-Regular',
                }}>
                {item.name}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  yearContainer: {
    padding: 15,
    height: Platform.OS === 'android' ? hp(80) : hp(60),
    borderBottomWidth: 1,
    borderBottomColor: '#DADCE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 5,
  },

  month: {
    height: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },

  yearLabel: {
    fontWeight: 'bold',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 25,
  },
};

export default MonthYearPicker;
