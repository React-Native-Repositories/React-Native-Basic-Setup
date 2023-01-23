import * as React from "react"
import Svg, { Defs, G, Circle, Path } from "react-native-svg"
import { hp, wp } from "../../../utils/dimensions"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AddSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={wp(66)}
      height={hp(66)}
      viewBox="0 0 66 66"
      {...props}
    >
      <Defs></Defs>
      <G data-name="Group 10107">
        <G transform="translate(-327 -620) translate(327 620)" filter="url(#a)">
          <Circle
            data-name="Ellipse 3617"
            cx={24}
            cy={24}
            r={24}
            transform="translate(9 6)"
            fill="#1a73e8"
          />
        </G>
        <Path
          data-name="Path 46765"
          d="M0 0h24v24H0z"
          fill="none"
          transform="translate(-327 -620) translate(348 638)"
        />
        <Path
          data-name="Path 46766"
          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
          fill="#fff"
          transform="translate(-327 -620) translate(348 638)"
        />
      </G>
    </Svg>
  )
}

export default AddSvgComponent
