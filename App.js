import React, { useState } from 'react';
import { HomeScreen } from './Components/Home/HomeScreen';
import { SplashScreen } from './Components/SplashScreen/SplashScreen';

const App = () => {
    const [homeLoaded, setHomeLoaded] = useState(false);

    const handleHomeLoaded = () => {
        setHomeLoaded(true);
    };

    return (
        <>
            {!homeLoaded ? <SplashScreen onHomeLoaded={handleHomeLoaded} /> : <HomeScreen onHomeLoaded={handleHomeLoaded} />}
        </>
    );
};

export default App;
