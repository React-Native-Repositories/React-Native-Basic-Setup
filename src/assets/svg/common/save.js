import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function SaveSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getValue(props,`width`,'')?getValue(props,`width`,''):wp(24)}
      height={getValue(props,`height`,'')?getValue(props,`height`,''):hp(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path data-name="Path 46737" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46738"
        d="M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2.006 2.006 0 002-2V7zm2 16H5V5h11.17L19 7.83zm-7-7a3 3 0 103 3 3 3 0 00-3-3zM6 6h9v4H6z"
        fill={getValue(props, `color`, '') ? props.color :"#1a73e8"}
      />
    </Svg>
  )
}

export default SaveSvgComponent
