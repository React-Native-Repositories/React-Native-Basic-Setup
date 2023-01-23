import React, {useEffect} from 'react';
import {useColorMode} from 'native-base';
import {Pressable, TouchableOpacity} from 'react-native';
import useColorScheme from '@theme/hooks/useColorScheme';

import useThemeToggler from '@theme/hooks/useThemeToggler';
import AppIcon from './AppIcon';
import { colorModeManager } from '@theme';
import AnimatedPressable from './AppAnimatedPressable';
import { hp } from '@utils/dimensions';
import AppText from './AppText';
import { RFValue } from '@utils/npm-helper/react-native-responsive-fontsize';

function ToggleDarkMode() {
  const {isThemeDark, toggleTheme, iconName} = useThemeToggler();
  const {toggleColorMode} = useColorMode();
  const colorScheme = useColorScheme();
  const isDarkModeSupported = true;

  const handleToggleTheme = async() => {
    if (isDarkModeSupported) {
      const theme = await colorModeManager.get();
      let mode = theme === 'light' ? 'dark' : 'light';
      await colorModeManager.set(mode);
      toggleTheme();
      // toggleColorMode();
    }
  };

  useEffect(async() => {
    const theme = await colorModeManager.get();
    const isCurrentColorSchemeDark = colorScheme == 'dark';

    // if current colorscheme is light, and app is in dark mode, toggle to light
    // if current colorscheme is dark, and app is in light mode, toggle to dark

    // if (!isCurrentColorSchemeDark && isThemeDark) {
    //   toggleTheme();
    // } else if (isCurrentColorSchemeDark && !isThemeDark) {
    //   toggleColorMode();
    // }
  }, [colorScheme]);

  return (
    <Pressable onPress={handleToggleTheme} unstable_pressDelay={0} style={{flexDirection:'row',marginTop:hp(16),alignItems:'center'}}>
      <AppIcon
        name={iconName}
        size={hp(25)}
        color={isThemeDark ? 'white' : 'black'}
      />
      <AppText style={{
        marginLeft:hp(20),
        fontSize: RFValue(12),
        color:isThemeDark ? 'white' : '#5F6368'
      }}>{isThemeDark?'Enable Light Mode':'Enable Dark Mode'}</AppText>
    </Pressable>
  );
}

export default ToggleDarkMode;
