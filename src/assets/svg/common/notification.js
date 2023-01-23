import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function NotificationSvgComponent(props) {
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
      {...props}
    >
      <Path data-name="Path 46795" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46796"
        d="M12 22a2.006 2.006 0 002-2h-4a2.006 2.006 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  )
}

export default NotificationSvgComponent
