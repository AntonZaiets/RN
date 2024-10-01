import React from "react";
import { Svg, Path } from 'react-native-svg';

export const HomeSvg = ({fill}) => {
    return (
        <Svg width="27" height="27" viewBox="0 0 27 27" fillRule="evenodd">
            <Path clipRule="evenodd"
                  d="M14.5279 4.524C14.189 4.41388 13.8239 4.41388 13.485 4.524C13.2405 4.60342 13.0533 4.73806 12.9058 4.8633C12.7714 4.97734 12.6248 5.124 12.4743 5.27459L12.4742 5.27461L12.4552 5.29364L3.919 13.8299C3.5895 14.1594 3.5895 14.6936 3.919 15.0231C4.24851 15.3526 4.78274 15.3526 5.11225 15.0231L6.72859 13.4068V20.2668L6.72859 20.2925V20.2925C6.72858 20.7432 6.72857 21.1194 6.75368 21.4267C6.77987 21.7472 6.83649 22.0482 6.98148 22.3327C7.20394 22.7693 7.5589 23.1243 7.9955 23.3467C8.28006 23.4917 8.58099 23.5483 8.90152 23.5745C9.20884 23.5996 9.58503 23.5996 10.0357 23.5996H10.0614H17.9485H17.9742C18.4249 23.5996 18.8011 23.5996 19.1084 23.5745C19.4289 23.5483 19.7299 23.4917 20.0144 23.3467C20.451 23.1243 20.806 22.7693 21.0285 22.3327C21.1734 22.0482 21.2301 21.7472 21.2563 21.4267C21.2814 21.1194 21.2814 20.7432 21.2813 20.2925V20.2668V13.4038L22.9006 15.0231C23.2301 15.3526 23.7644 15.3526 24.0939 15.0231C24.4234 14.6936 24.4234 14.1594 24.0939 13.8299L15.5577 5.29364L15.5386 5.27461C15.3881 5.12401 15.2414 4.97735 15.1071 4.8633C14.9596 4.73806 14.7724 4.60342 14.5279 4.524ZM20.0157 12.1382L14.3644 6.48688C14.1875 6.30996 14.0902 6.21362 14.015 6.14975L14.0064 6.14257L13.9979 6.14975C13.9226 6.21362 13.8254 6.30997 13.6485 6.48688L7.99421 12.1411V20.2668C7.99421 20.7498 7.9947 21.074 8.0151 21.3236C8.03489 21.5659 8.07023 21.6817 8.10916 21.7581C8.21028 21.9566 8.37163 22.1179 8.57008 22.219C8.64649 22.258 8.76232 22.2933 9.00458 22.3131C9.25423 22.3335 9.57841 22.334 10.0614 22.334H17.9485C18.4315 22.334 18.7557 22.3335 19.0054 22.3131C19.2476 22.2933 19.3634 22.258 19.4399 22.219C19.6383 22.1179 19.7997 21.9566 19.9008 21.7581C19.9397 21.6817 19.975 21.5659 19.9948 21.3236C20.0152 21.074 20.0157 20.7498 20.0157 20.2668V12.1382Z"
                  fill={fill}/>
        </Svg>
    );
}
