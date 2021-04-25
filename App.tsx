import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
//import { useFonts } from "expo-font";
//import * as Font from "expo-font";

// import {
//   useFonts,
//   Jost_400Regular,
//   Jost_600SemiBold,
// } from "@expo-google-fonts/jost";

import Routes from "./src/routes";

export default function App() {
  const [loading, setLoading] = useState(false);

  // const [loadedFonts] = useFonts({
  //   Jost_400Regular,
  //   Jost_600SemiBold,
  // });

  useEffect(() => {
    async function init() {
      // const resp = await Font.loadAsync({
      //   Inter_700Bold: require("./assets/fonts/Inter-Bold.ttf"),
      //   Inter_500Medium: require("./assets/fonts/Inter-Medium.ttf"),
      // });
    }
    init();
  }, []);

  return <Routes />;
}
