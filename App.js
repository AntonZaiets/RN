import React, { useState } from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import { SplashScreen } from "./Components/SplashScreen/SplashScreen";

export default function App() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    return (
        <>
            {!isLoadingComplete ? (
                <SplashScreen onLoadingComplete={() => setLoadingComplete(true)} />
            ) : (
                <HomeScreen />
            )}
        </>
    );
}
