import React, {ReactNode} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import useThemeToggler from '../../theme/hooks/useThemeToggler';
import {ThemeColors} from '../../theme/index';

function AppThemeScreen({children, style = {}}) {
  const {isThemeDark} = useThemeToggler();
  return (
    <SafeAreaView
      style={[styles.screen, style,
      //  {backgroundColor: ThemeColors.primary}
      {
        backgroundColor: isThemeDark
          ? ThemeColors.dark.background
          : ThemeColors.white,
      }
       ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: isThemeDark
              ? ThemeColors.dark.background
              : ThemeColors.white,
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default AppThemeScreen;
