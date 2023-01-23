import React from 'react';
import {Text} from 'react-native';
import useThemeToggler from '../../theme/hooks/useThemeToggler';

function AppText({
  children,
  fontSize = 'sm',
  fontFamily = 'GoogleSans-Regular',
  // style = {},
  color,
  ...otherProps
}) {
  const {isThemeDark} = useThemeToggler();
  // const cl = isThemeDark ? 'white' : 'black';
  // if (fontFamily) defaultStyles.text.fontFamily = fontFamily;
  return (
    <Text
      fontSize={fontSize}
      // color={cl}
      {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
