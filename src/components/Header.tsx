import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import colors from "../styles/colors";
import userImg from "../assets/perfil.png";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Anderson,</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
  },
});
