import React from "react";
import { Svg, Path } from 'react-native-svg';

export const ProfileSvg = ({fill}) => {
    return (
        <Svg width="27" height="27" viewBox="0 0 27 27" fill='none'>
            <Path
                d="M4.41211 23.1317L4.5322 22.3597C4.7708 20.8259 5.69303 19.4705 7.14223 18.9143C8.72005 18.3088 10.9736 17.6577 13.3696 17.6577C15.7656 17.6577 18.0192 18.3088 19.597 18.9143C21.0462 19.4705 21.9684 20.8259 22.207 22.3597L22.3271 23.1317"
                stroke={fill} strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round"/>
            <Path
                d="M13.369 13.6789C16.1174 13.6789 18.3454 11.4509 18.3454 8.70247C18.3454 5.95408 16.1174 3.72607 13.369 3.72607C10.6206 3.72607 8.39258 5.95408 8.39258 8.70247C8.39258 11.4509 10.6206 13.6789 13.369 13.6789Z"
                stroke={fill} strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>

    );
}
