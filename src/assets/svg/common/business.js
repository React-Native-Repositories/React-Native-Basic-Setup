import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function BusinessSvgComponent(props) {
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
      <Path data-name="Path 46791" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46792"
        d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"
        fill={getValue(props, `color`, '') ? props.color : '#5f6368'}
      />
    </Svg>
  )
}

export default BusinessSvgComponent
