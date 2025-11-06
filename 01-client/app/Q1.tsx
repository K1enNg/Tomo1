import { Text, View, StyleSheet, Pressable} from "react-native";
import { Image } from "expo-image";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useFonts} from "expo-font";
import { useRouter } from "expo-router";


export default function Q1() {
  const router = useRouter();

  const [loaded, error] = useFonts({
    'Nunito-Light': require('../assets/fonts/Nunito/static/Nunito-Light.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito/static/Nunito-SemiBold.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>

       <View>

        <Image
          source={require("../assets/images/Group95.png")}
          style = {{
            width: 360,
            height: 24,
            marginTop: 30
          }}
          contentFit="cover"
        />

      </View>

      <View style= {{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 340,
          height: 100
        }}>

        <Text style = {[styles.nunitoLight, {marginBottom: 20, fontSize: 18, textAlign: "center"}]}> 
          Ba mẹ có thể đọc theo các bộ phận cơ thể dưới đây và ấn chọn khi đã đọc bộ phận đó rồi nhé.
        </Text>

      </View>
      
      <View style= {{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#fcc555",
          width: 340,
          height: 50,
          borderRadius: 20, 
          marginBottom: 60
        }}>

        <Pressable
          onPress={() => console.log("Pressed")}>

          <Text style = {[styles.nunitoSemiBold, {fontSize: 24, textAlign: "center"}]}>
            Tiếp Tục
          </Text>
        </Pressable>
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
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
    fontSize: 16
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
  },
  card:{
    width: 152,
    height: 62,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: 44,
    height: 44,
    marginBottom: 5
  }

});