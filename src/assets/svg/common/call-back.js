import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function CallbackSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={
        getValue(props, `width`, '') ? getValue(props, `width`, '') : wp(24)
      }
      height={
        getValue(props, `height`, '') ? getValue(props, `height`, '') : hp(24)
      }
      viewBox="0 0 24 24"
      {...props}>
      <Path data-name="Path 46742" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46743"
        d="M6.54 5a12.312 12.312 0 00.45 2.59l-1.2 1.2A14.826 14.826 0 015.03 5h1.51m9.86 12.02a12.753 12.753 0 002.6.45v1.49a15.426 15.426 0 01-3.8-.75l1.2-1.19M7.5 3H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.49a1 1 0 00-1-1 11.407 11.407 0 01-3.57-.57.839.839 0 00-.31-.05 1.024 1.024 0 00-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2a1 1 0 00.25-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1z"
        fill={
          getValue(props, `color`, '')
            ? getValue(props, `color`, '')
            : '#1a73e8'
        }
      />
    </Svg>
  );
}

export default CallbackSvgComponent;
