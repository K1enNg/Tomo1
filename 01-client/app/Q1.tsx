import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";


export default function Q1() {
  const router = useRouter();

  const items = [
    { id: 1, label: 'Tai', image: require('../assets/images/tai.png') },
    { id: 2, label: 'Tóc', image: require('../assets/images/toc.png') },
    { id: 3, label: 'Mắt', image: require('../assets/images/mat.png') },
    { id: 4, label: 'Mũi', image: require('../assets/images/mui.png') },
    { id: 5, label: 'Môi', image: require('../assets/images/moi.png') },
    { id: 6, label: 'Răng', image: require('../assets/images/rang.png') },
    { id: 7, label: 'Miệng', image: require('../assets/images/mieng.png') },
    { id: 8, label: 'Bàn tay', image: require('../assets/images/bantay.png') },
    { id: 9, label: 'Ngón tay', image: require('../assets/images/ngontay.png') },
    { id: 10, label: 'Vai', image: require('../assets/images/vai.png') },
    { id: 11, label: 'Lưng', image: require('../assets/images/lung.png') },
    { id: 12, label: 'Bụng', image: require('../assets/images/bung.png') },
    { id: 13, label: 'Đầu gối', image: require('../assets/images/daugoi.png') },
    { id: 14, label: 'Bàn chân', image: require('../assets/images/banchan.png') },
  ];

  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2))
  }

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
          style={{
            width: 360,
            height: 24,
            marginTop: 70
          }}
          contentFit="cover"
        />

      </View>

      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 340,
        height: 100
      }}>

        <Text style={[styles.nunitoLight, { marginBottom: 20, fontSize: 18, textAlign: "center" }]}>
          Ba mẹ có thể đọc theo các bộ phận cơ thể dưới đây và ấn chọn khi đã đọc bộ phận đó rồi nhé.
        </Text>

      </View>

      <View

        style={{
          marginBottom: 30,
        }}
      >
        {
          rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {
                row.map((item) => (
                  <View key={item.id} style={[styles.card, { flexDirection: "row" }]}>
                    <Pressable
                      style={styles.press}
                      onPress={() => console.log(`Pressed ${item.label}`)}
                    >

                      <Image
                        source={item.image}
                        style={styles.image}
                      />
                      <Text style={styles.nunitoSemiBold}>{item.label}</Text>

                    </Pressable>
                  </View>
                ))
              }
            </View>
          ))
        }
      </View>

      <View style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcc555",
        width: 340,
        height: 50,
        borderRadius: 20,
        marginBottom: 30
      }}>

        <Pressable
          style={{
            width: 340,
            height: 30,
          }}
          onPress={() => {
            router.push('/Pause');
          }}
        >


          <Text style={[styles.nunitoSemiBold, { fontSize: 24, textAlign: "center" }]}>
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
    backgroundColor: "#cfeef8"
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
    fontSize: 20
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  card: {
    width: 140,
    height: 55,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 15,
    marginBottom: 3,
    paddingHorizontal: 10,
  },
  image: {
    width: 35,
    height: 35,
    marginBottom: 5,
    marginRight: 10
  },
  press: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    width: 162,
    height: 60
  }
})

export { Q1 };