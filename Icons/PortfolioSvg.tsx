import React from "react";
import { Svg, Path, Rect } from 'react-native-svg';

export const PortfolioSvg = () => {
    return (
        <Svg width="27" height="27" viewBox="0 0 27 27" fill="none">
            <Rect x="5.0625" y="8.20117" width="19.375" height="15.0694" rx="3.375" stroke="#606773"
                  strokeWidth="1.6875"/>
            <Path d="M12.5957 14.6602L16.9013 14.6602" stroke="#606773" strokeWidth="1.8" strokeLinecap="round"/>
            <Path
                d="M10.4455 7.44791V6.46875C10.4455 5.22611 11.4528 4.21875 12.6955 4.21875H16.8066C18.0492 4.21875 19.0566 5.22611 19.0566 6.46875V7.44791"
                stroke="#606773" strokeWidth="1.8"/>
        </Svg>
    );
}
