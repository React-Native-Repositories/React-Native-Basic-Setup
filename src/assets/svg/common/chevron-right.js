import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function ChevronRightSvgComponent(props) {
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
      <Path data-name="Path 46575" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46576"
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        fill={getValue(props, `color`, '') ? props.color : '#1a73e8'}
      />
    </Svg>
  );
}

export default ChevronRightSvgComponent;
