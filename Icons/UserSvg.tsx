import React from "react";
import { Svg, Path, Circle } from 'react-native-svg';


export const UserSvg = () => {
    return (
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle opacity="0.4" cx="22" cy="22" r="22" fill="#00B28C"/>
            <Path
                d="M15.5833 29.3334L15.681 28.7047C15.8569 27.5742 16.5362 26.5759 17.6031 26.1629C18.7974 25.7007 20.5198 25.1967 22.3525 25.1967C24.1852 25.1967 25.9076 25.7007 27.1018 26.1629C28.1688 26.5759 28.8481 27.5742 29.0239 28.7047L29.1217 29.3334"
                stroke="white" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round"/>
            <Path
                d="M22.3525 22.1881C24.4294 22.1881 26.1132 20.5044 26.1132 18.4274C26.1132 16.3505 24.4294 14.6667 22.3525 14.6667C20.2755 14.6667 18.5918 16.3505 18.5918 18.4274C18.5918 20.5044 20.2755 22.1881 22.3525 22.1881Z"
                stroke="white" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
}
