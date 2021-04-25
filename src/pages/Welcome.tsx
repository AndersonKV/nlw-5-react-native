import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import AppLoading from "expo-app-loading";

import { Feather } from "@expo/vector-icons";
import waterRingImg from "../assets/watering.png";
import colors from "../styles/colors";
// import {
//   useFonts,
//   Jost_400Regular,
//   Jost_600SemiBold,
// } from "@expo-google-fonts/jost";

//COMPONENT
import { Button } from "../components/Button";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function init() {
      console.log("welcome");
      //console.log(<Feather name="chevron-right" style={styles.buttonIcon} />);
      setLoading(true);
    }
    init();
  }, []);

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <>
      {loading === true ? (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>
              Gerencie{"\n"}
              suas plantas de {"\n"}
              forma facil
            </Text>
            <Image
              source={waterRingImg}
              resizeMode={"contain"}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Não esqueça mais de regar suas plantas Nós cuidamos de lembrar
              você sempre que precisar.
            </Text>

            <Button
              title={">"}
              myPaddingHorizontal={20}
              onPress={handleStart}
            />

            {/* <Button
              title={<Feather name="chevron-right" style={styles.buttonIcon} />}
              myPaddingHorizontal={20}
              onPress={handleStart}
            /> */}
          </View>
        </View>
      ) : (
        <>
          <Text>Carregando Welcome...</Text>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    lineHeight: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  buttonIcon: {
    fontSize: 24,
    color: colors.white,
  },
});
