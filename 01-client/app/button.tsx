import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const button1 = "rgba(255, 231, 144, 1)";
const button2 = "rgba(248, 215, 95, 1)";
const button3 = "rgba(255, 165, 68, 1)";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} {...props}>
      <LinearGradient
        colors={[button1, button2, button3]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.content}
      >
        <Text>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
  content: {
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Button;
