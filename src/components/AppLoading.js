import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from '../../utils/npm-helper/react-native-responsive-screen';
import useThemeToggler from '../../theme/hooks/useThemeToggler';
import { ThemeColors } from '../../theme';

function AppLoading({visible = false, opacity = 0.8}) {
  if (!visible) return null;
  const {isThemeDark} = useThemeToggler();

  return (
    <View
      style={[
        styles.overlay,
        {
          backgroundColor: isThemeDark ? ThemeColors.dark.background:'white',
          opacity: opacity,
        },
      ]}>
      {/* <LottieView
        autoPlay
        loop
        source={require('@assets/animations/spinning.json')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    // flex:1,
    height: hp2dp('100%'),
    width: wp2dp('100%'),
    position: 'absolute',
    // zIndex: 1,
  },
});

export default AppLoading;
