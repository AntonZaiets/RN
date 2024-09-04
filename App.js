import HomeScreen from "./Components/Home/HomeScreen";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import { useEffect, useState } from "react";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 500);
  }, []);

  return (
      <>
        {isShowSplash ? <SplashScreen /> : <HomeScreen />}
      </>
  );
}
