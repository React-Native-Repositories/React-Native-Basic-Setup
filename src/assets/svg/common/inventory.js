import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function InventorySvgComponent(props) {
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
      <G data-name="Group 10120">
        <Path data-name="Rectangle 17440" fill="none" d="M0 0H24V24H0z" />
      </G>
      <G data-name="Group 10122">
        <G data-name="Group 10121" fill={getValue(props, `color`, '') ? props.color : '#5f6368'}>
          <Path
            data-name="Path 46799"
            d="M20 2H4a2.074 2.074 0 00-2 2v3.01A2.02 2.02 0 003 8.7V20a2.149 2.149 0 002 2h14a2.149 2.149 0 002-2V8.7a2.02 2.02 0 001-1.69V4a2.074 2.074 0 00-2-2zm-1 18H5V9h14zm1-13H4V4h16z"
          />
          <Path
            data-name="Rectangle 17441"
            transform="translate(9 12)"
            d="M0 0H6V2H0z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default InventorySvgComponent
