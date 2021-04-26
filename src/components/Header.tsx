import React, { useEffect } from "react";
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
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const getUser = await AsyncStorage.getItem("@plantmanager:user");

      const user =
        getUser &&
        getUser
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
          .join(" ");

      setName(user || "");
    }
    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{name},</Text>
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
