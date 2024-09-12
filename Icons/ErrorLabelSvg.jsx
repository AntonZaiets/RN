import React from "react";
import { Svg, Path, Rect } from 'react-native-svg';

export const ErrorLabelSvg = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#D63C41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M11.25 11.25H12V16.5H12.75" stroke="#D63C41" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <Path
                d="M12 9C12.6213 9 13.125 8.49632 13.125 7.875C13.125 7.25368 12.6213 6.75 12 6.75C11.3787 6.75 10.875 7.25368 10.875 7.875C10.875 8.49632 11.3787 9 12 9Z"
                fill="#D63C41"/>
        </Svg>

    );
}
