import React from "react";
import {Svg, Path } from 'react-native-svg';

export const ArrowLeftSvg = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 12.5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M12.6364 5L20 12.5L12.6364 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </Svg>

    );
}
