import React, {ReactElement} from 'react';
import {Link} from 'native-base';

import AppText from './AppText';
import {GestureResponderEvent} from 'react-native';

function AppLink({children, underline = true, onPress, ...otherProps}) {
  return (
    <Link onPress={onPress}>
      <AppText underline={underline} {...otherProps}>
        {children}
      </AppText>
    </Link>
  );
}

export default AppLink;
