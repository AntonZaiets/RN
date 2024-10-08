import React from "react";
import {Svg, Path } from 'react-native-svg';

export const GlobusSvg = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
            <Path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#FA8A34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M3 12H21" stroke="#FA8A34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path
                d="M12 20.7585C14.0711 20.7585 15.75 16.8372 15.75 12.0001C15.75 7.16297 14.0711 3.2417 12 3.2417C9.92893 3.2417 8.25 7.16297 8.25 12.0001C8.25 16.8372 9.92893 20.7585 12 20.7585Z"
                stroke="#FA8A34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
}
