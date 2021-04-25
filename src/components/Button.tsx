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

interface ButtonProps extends TouchableOpacityProps {
  title: any;
  myPaddingHorizontal?: number;
}

export function Button({ title, myPaddingHorizontal, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        paddingHorizontal: myPaddingHorizontal,
      }}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 26,
    textAlign: "center",
  },
});
