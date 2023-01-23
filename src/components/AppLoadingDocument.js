import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from '../../utils/npm-helper/react-native-responsive-screen';
import useThemeToggler from '../../theme/hooks/useThemeToggler';
import { ThemeColors } from '../../theme';

function AppDocumentLoading({visible = false, opacity = 0.8}) {
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
        source={require('../assets/animations/document.json')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: hp2dp('100%'),
    width: wp2dp('100%'),
    position: 'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    alignItems:'center',
    justifyContent:'center'
    // zIndex: 1,
  },
});

export default AppDocumentLoading;
