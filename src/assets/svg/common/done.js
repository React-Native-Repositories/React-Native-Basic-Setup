import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function DoneSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getValue(props,`width`,'')?getValue(props,`width`,''):wp(24)}
      height={getValue(props,`height`,'')?getValue(props,`height`,''):hp(24)}
      viewBox="0 0 24 24"
      {...props}>
      <Path data-name="Path 45588" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 45589"
        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
        fill={
          getValue(props, `color`, '')
            ? getValue(props, `color`, '')
            : '#1a73e8'
        }
      />
    </Svg>
  );
}

export default DoneSvgComponent;
