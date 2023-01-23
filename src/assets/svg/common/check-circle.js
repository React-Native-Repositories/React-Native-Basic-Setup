import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function CheckCircleSvgComponent(props) {
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
      <Path data-name="Path 46744" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46745"
        d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
        fill={
          getValue(props, `color`, '')
            ? getValue(props, `color`, '')
            : '#e8f0fe'
        }
      />
    </Svg>
  );
}

export default CheckCircleSvgComponent;
