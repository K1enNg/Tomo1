import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const button2 = "rgba(255, 218, 83, 1)";
const button3 = "rgba(255, 165, 68, 1)";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface Props {
  progress?: number;
  style?: {};
}

function ProgressBar({ style, progress = 0 }: Props) {
  const animaProgress = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(animaProgress, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthPercent = animaProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.container, style]}>
      <AnimatedLinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={[button2, button3]}
        style={[styles.progress, { width: widthPercent }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 1000,
    height: 20,
  },
  progress: {
    borderRadius: 1000,
    height: "100%",
    width: "100%",
  },
});

export default ProgressBar;
