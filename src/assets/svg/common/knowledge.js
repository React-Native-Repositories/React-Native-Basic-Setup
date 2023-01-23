import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function KnowledgeSvgComponent(props) {
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
      <Path data-name="Rectangle 16967" fill="none" d="M0 0H24V24H0z" />
      <Path
        data-name="Path 46253"
        d="M7 20h4a2 2 0 01-4 0zm-2-1h8v-2H5zm11.5-9.5a7.536 7.536 0 01-3.77 6.5H5.27A7.5 7.5 0 1116.5 9.5zm-2 0a5.5 5.5 0 00-11 0A5.436 5.436 0 005.85 14h6.3a5.436 5.436 0 002.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  )
}

export default KnowledgeSvgComponent
