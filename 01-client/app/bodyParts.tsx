import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressGroup from "./progressGroup";

export interface BodyPartsProps {
  progress: number;
  source: ImageSourcePropType;
  text: string;
}

const BodyParts: React.FC<BodyPartsProps> = ({ progress, source, text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressGroup progress={progress} />
      <TouchableWithoutFeedback onPress={() => alert("pressed")}>
        <View style={styles.content}>
          <Image source={source} style={styles.image} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
  },
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 144,
  },
  image: {
    height: 232,
    width: 232,
  },
  text: {
    marginTop: 32,
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default BodyParts;
