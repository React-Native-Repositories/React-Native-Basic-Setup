import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function CloseSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getValue(props,`width`,'')?getValue(props,`width`,''):wp(22)}
      height={getValue(props,`height`,'')?getValue(props,`height`,''):hp(22)}
      viewBox="0 0 22 22"
      {...props}>
      <Path data-name="Path 46724" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46725"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  );
}

export default CloseSvgComponent;
