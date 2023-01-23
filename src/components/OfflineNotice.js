import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import AppText from './AppText';
import {ThemeColors} from '../../theme';
import AppThemeScreen from './AppThemeScreen';
import LottieView from 'lottie-react-native';
import {hp, wp} from '../../utils/dimensions';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';
import useThemeToggler from '../../theme/hooks/useThemeToggler';

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  const {isThemeDark} = useThemeToggler();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <AppThemeScreen>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            autoPlay
            loop
            style={{width: wp(300), height: hp(300)}}
            source={require('../assets/lottie-animations/no-internet.json')}
          />
          <AppText
            style={[
              styles.text,
              {
                color: isThemeDark
                  ? ThemeColors.lightMode.background
                  : ThemeColors.darkMode.background,
              },
            ]}
            fontSize="xs">
            No Internet Connection
          </AppText>
        </View>
      </AppThemeScreen>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ThemeColors.danger,
    height: 30,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  text: {
    fontSize: RFValue(14),
    // fontFamily:'GoogleSans-Medium'
  },
});

export default OfflineNotice;
