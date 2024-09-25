import React from "react";
import { Svg, Path, Circle } from 'react-native-svg';

export const CheckSvg = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Circle cx="16" cy="16" r="16" fill="#FA8A34"/>
            <Path d="M10.6667 15.4737L14.8165 19.328C14.8197 19.331 14.8248 19.3308 14.8278 19.3277L22.0001 12"
                  stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
}
