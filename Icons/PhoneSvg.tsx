import React from "react";
import {Svg, Path, Rect, Circle} from 'react-native-svg';


export const PhoneSvg = () => {
    return (
        <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="25.0001" cy="25" r="24" fill="#F2FAF7" stroke="#E9F7F2"/>
            <Rect x="19" y="16" width="12" height="18" rx="2.59259" stroke="#00A36D" strokeWidth="1.6"/>
            <Path d="M27.6665 30.6665L22.3332 30.6665" stroke="#00A36D" strokeWidth="1.6" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </Svg>
    );
}
