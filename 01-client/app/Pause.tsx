// import { View, StyleSheet } from "react-native";
// import { Image } from "expo-image";
// import React, { useEffect } from "react";
// import { useRouter } from "expo-router";


// export default function Pause() {
//   const router = useRouter();

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       // router.push("/Q2Title"); 
//       console.log("Timer finished")
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>

//        <View>

//         <Image
//          source: require("../assets/images/mascot_logo.png"),
//           style = {{
//             width: 256,
//             height: 248,
//             marginTop: 70
//           }}
//           contentFit="cover"
//         />

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
//   image:{
//     width: 35,
//     height: 35,
//     marginBottom: 5,
//     marginRight: 10
//   }
// })

// export { Pause };