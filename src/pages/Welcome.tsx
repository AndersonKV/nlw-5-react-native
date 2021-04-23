import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import waterRingImg from "../assets/watering.png";
import colors from "../../styles/colors";

//COMPONENT
import { Button } from "../components/Button";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie{"\n"}
        suas plantas{"\n"} de forma facil
      </Text>
      {visible && <Image source={waterRingImg} style={styles.image} />}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button
        title={visible === false ? "Mostrar imagem" : "Ocultar imagem"}
        onPress={handleVisible}
      />
      <Button title={"Ocultar imagem"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    width: 292,
    height: 284,
  },
});
