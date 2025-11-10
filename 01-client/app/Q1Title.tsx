import { Text, View, StyleSheet, Pressable, Button} from "react-native";
import { Image } from "expo-image";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useFonts} from "expo-font";
import { useRouter } from "expo-router";


export default function Q1Title() {
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
            marginTop: 100
          }}
          contentFit="cover"
        />

      </View>

      <View>

        <Image
          source={require("../assets/images/platypus.png")}
          style = {{
            width: 256,
            height: 248,
            marginTop: 100
          }}
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
          Ba mẹ đọc các bộ phận cơ thể và để bé chỉ trên cơ thể mình. 
          Mỗi khi trẻ chỉ đúng các bộ phận trên cơ thể, hãy yêu cầu trẻ nhắc lại từ đó theo mình.
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
          style = {{
            width: 340,
            height: 30,
          }}
          onPress={() => {   
            router.push('/Q1');
          }}
        >

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
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
  },
});

export { Q1Title };