// import { Text, View, StyleSheet, Pressable } from "react-native";
// import { Image } from "expo-image";
// import React from "react";
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import { useFonts } from "expo-font";
// import { useRouter } from "expo-router";


// export default function Q2Title() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>

//        <View>

//         <Image
//           source={require("../assets/images/ProgressBar100.png")}
//           style = {{
//             width: 360,
//             height: 24,
//             marginTop: 100
//           }}
//           contentFit="cover"
//         />

//       </View>

//       <View>

//         <Image
//           source={require("../assets/images/platypus.png")}
//           style = {{
//             width: 256,
//             height: 248,
//             marginTop: 100
//           }}
//         />

//       </View>

//       <View style= {{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           width: 340,
//           height: 100
//         }}>

//         <Text style = {[styles.nunitoLight, {marginBottom: 20, fontSize: 18, textAlign: "center"}]}> 
//           Ba mẹ bày các thẻ học trên bàn, yêu cầu trẻ chỉ đúng tên bộ phận cơ thể khi đọc. 
//           Mỗi khi trẻ chỉ đúng thẻ, hãy yêu cầu trẻ nhắc lại từ đó theo mình.
//         </Text>

//       </View>
      
//       <View style= {{
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor:"#fcc555",
//           width: 340,
//           height: 50,
//           borderRadius: 20, 
//           marginBottom: 60
//         }}>

//         <Pressable
//           style = {{
//             width: 340,
//             height: 30,
//           }}
//           onPress={() => {   
//             router.push('/Q2');
//           }}
//         >

//           <Text style = {[styles.nunitoSemiBold, {fontSize: 24, textAlign: "center"}]}>
//             Tiếp Tục
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:"#cfeef8"
//   },
//   nunitoLight: {
//     fontFamily: "Nunito-Light",
//     color: "#555",
//   },
//   nunitoSemiBold: {
//     fontFamily: "Nunito-SemiBold",
//     color: "#555",
//   },
// });

// export { Q2Title };