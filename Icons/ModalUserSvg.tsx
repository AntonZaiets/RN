import React from "react";
import {Svg, Path, Circle} from 'react-native-svg';

export const ModalUserSvg = () => {
    return (
        <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="25" cy="25" r="24" fill="#F2FAF7" stroke="#E9F7F2"/>
            <Path
                d="M18 33.0001L18.1067 32.3143C18.2985 31.081 19.0395 29.992 20.2035 29.5414C21.5063 29.0372 23.3853 28.4873 25.3846 28.4873C27.3839 28.4873 29.2629 29.0372 30.5657 29.5414C31.7297 29.992 32.4707 31.081 32.6625 32.3143L32.7692 33.0001"
                stroke="#00A385" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <Path
                d="M25.3848 25.2051C27.6506 25.2051 29.4874 23.3683 29.4874 21.1026C29.4874 18.8368 27.6506 17 25.3848 17C23.119 17 21.2822 18.8368 21.2822 21.1026C21.2822 23.3683 23.119 25.2051 25.3848 25.2051Z"
                stroke="#00A385" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
}
