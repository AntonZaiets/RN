import React, { useState } from 'react';
import { Navigation } from "./Components/Navigation/Navigation";
import { SplashScreen } from "./Components/SplashScreen/SplashScreen";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading ? (
                <SplashScreen onLoadingComplete={handleLoadingComplete} />
            ) : (
                <Navigation />
            )}
        </>
    );
};

export default App;
