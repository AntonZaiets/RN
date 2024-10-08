import React from "react";
import { Svg, Path, Rect, G } from 'react-native-svg';


export const HouseSvg = () => {
    return (
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G opacity="0.64">
                <Rect x="0.000244141" y="-6.10352e-05" width="43.9999" height="43.9999" rx="22" fill="#565ED1"/>
                <Path d="M11.917 20.9176L20.942 13.3251C21.2805 13.0403 21.7742 13.0384 22.1149 13.3205L31.2887 20.9176"
                      stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                <Path d="M29.6109 19.5444V29.154C29.6109 29.6595 29.2011 30.0692 28.6957 30.0692H26.3115" stroke="white"
                      strokeWidth="1.375" strokeLinecap="round"/>
                <Path
                    d="M22.5034 29.1545V24.9626C22.5034 24.7169 22.4046 24.4816 22.2294 24.3095L19.4097 21.5413C19.0537 21.1918 18.4834 21.1918 18.1274 21.5413L15.3077 24.3095C15.1324 24.4816 15.0337 24.7169 15.0337 24.9626V29.1545C15.0337 29.66 15.4434 30.0697 15.9489 30.0697H21.5882C22.0936 30.0697 22.5034 29.66 22.5034 29.1545Z"
                    fill="white" stroke="white" strokeWidth="1.375"/>
                <Path d="M13.2913 25.4932L18.2874 20.901C18.6485 20.5691 19.2072 20.5809 19.554 20.9278L24.1182 25.4932"
                      stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
            </G>
        </Svg>

    );
}
