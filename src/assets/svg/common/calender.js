import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {hp, wp} from '../../../../utils/dimensions';
import {getValue} from '../../../../utils/lodash';

function CalenderSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getValue(props,`width`,'')?getValue(props,`width`,''):wp(24)}
      height={getValue(props,`height`,'')?getValue(props,`height`,''):hp(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path data-name="Path 46509" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 46510"
        d="M7 11h2v2H7zm14-5v14a2.006 2.006 0 01-2 2H5a2 2 0 01-2-2l.01-14A1.991 1.991 0 015 4h1V2h2v2h8V2h2v2h1a2.006 2.006 0 012 2zM5 8h14V6H5zm14 12V10H5v10zm-4-7h2v-2h-2zm-4 0h2v-2h-2z"
        fill={getValue(props,`color`,'')?getValue(props,`color`,''):"#707070"}
      />
    </Svg>
  )
}

export default CalenderSvgComponent
