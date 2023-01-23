import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function ClockSvgComponent(props) {
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
      <Path data-name="Path 46793" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46794"
        d="M11.99 2A10 10 0 1022 12 10 10 0 0011.99 2zM12 20a8 8 0 118-8 8 8 0 01-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  )
}

export default ClockSvgComponent
