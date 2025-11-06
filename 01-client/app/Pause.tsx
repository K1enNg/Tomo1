import { View, StyleSheet} from "react-native";
import { Image } from "expo-image";
import React from "react";

export default function Pause() {

  return (
    <View style={styles.container}>

       <View>

        <Image
          source={require("../assets/images/platypus.png")}
          style = {{
            width: 256,
            height: 248,
            marginTop: 70
          }}
          contentFit="cover"
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#cfeef8"
  },
  image:{
    width: 35,
    height: 35,
    marginBottom: 5,
    marginRight: 10
  }
})

export { Pause };