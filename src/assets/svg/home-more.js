import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { hp, wp } from "../../../utils/dimensions"

function HomeMoreSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={wp(24)}
      height={hp(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path data-name="Path 46252" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46253"
        d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
        fill="#e8f0fe"
      />
    </Svg>
  )
}

export default HomeMoreSvgComponent
