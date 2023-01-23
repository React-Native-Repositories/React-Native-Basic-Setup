import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function TicketSvgComponent(props) {
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
      <Path data-name="Path 46789" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46790"
        d="M22 10V6a2 2 0 00-2-2H4a1.991 1.991 0 00-1.99 2v4A2 2 0 012 14v4a2.006 2.006 0 002 2h16a2.006 2.006 0 002-2v-4a2 2 0 010-4zm-2-1.46a3.993 3.993 0 000 6.92V18H4v-2.54A4.013 4.013 0 006 12a3.992 3.992 0 00-1.99-3.46L4 6h16zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  );
}

export default TicketSvgComponent;
