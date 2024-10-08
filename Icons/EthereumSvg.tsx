import React from "react";
import { Svg, Path, Rect, G } from 'react-native-svg';


export const EthereumSvg = () => {
    return (
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G opacity="0.63">
                <Rect x="0.000244141" width="44.0001" height="44.0001" rx="22" fill="#617DEA"/>
                <Path d="M21.7102 9.16675V18.3167L29.4434 21.7727L21.7102 9.16675Z" fill="white" fillOpacity="0.602"/>
                <Path d="M21.7127 9.16675L13.9795 21.7727L21.7127 18.3167V9.16675Z" fill="white"/>
                <Path d="M21.7102 27.6993V33.9165L29.4479 23.2101L21.7102 27.6993Z" fill="white" fillOpacity="0.602"/>
                <Path d="M21.7127 33.9165V27.6993L13.9795 23.2101L21.7127 33.9165Z" fill="white"/>
                <Path d="M21.7102 26.2611L29.4434 21.7718L21.7102 18.3158V26.2611Z" fill="white" fillOpacity="0.2"/>
                <Path d="M13.9795 21.7718L21.7127 26.2611V18.3158L13.9795 21.7718Z" fill="white" fillOpacity="0.602"/>
            </G>
        </Svg>


    );
}
