import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function MoreVerticalSvgComponent(props) {
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
      <Path data-name="Path 46746" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46747"
        d="M12 8a2 2 0 10-2-2 2.006 2.006 0 002 2zm0 2a2 2 0 102 2 2.006 2.006 0 00-2-2zm0 6a2 2 0 102 2 2.006 2.006 0 00-2-2z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  );
}

export default MoreVerticalSvgComponent;
