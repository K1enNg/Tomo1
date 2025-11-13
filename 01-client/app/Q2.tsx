// import { Modal, Text, View, StyleSheet, Pressable} from "react-native";
// import { Image } from "expo-image";
// import React from "react";
// import { useState} from 'react';
// import QuizFrame from "./QuizFrame";


// export default function Q2() {
//    const items = [
//     { id: 1, label: 'Tai', image: require('../assets/images/tai.png')},
//     { id: 2, label: 'Tóc', image: require('../assets/images/toc.png') },
//     { id: 3, label: 'Mắt', image: require('../assets/images/mat.png') },
//     { id: 4, label: 'Mũi', image: require('../assets/images/mui.png') },
//     { id: 5, label: 'Môi', image: require('../assets/images/moi.png') },
//   ];

//   const [zoomedItem, setZoomedItem] = useState<any | null>(null);

//   const rows = [];
//   for (let i = 0; i < items.length; i += 2) {
//     rows.push(items.slice(i, i + 2))
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//           <Image
//               source={require("../assets/images/ProgressBar100.png")}
//               style = {{
//                 width: 360,
//                 height: 24,
//                 marginTop: 100,
//                 marginBottom: 30
//               }}
//           />
//       </View>

//       <View style={{ flex: 1, position: "relative" }}>
//         {rows.map((row, rowIndex) => (
//           <View key={rowIndex} style={styles.row}>
//             {row.map((item) => (
//               <View key={item.id} style={[styles.card]}>
//                 <Pressable
//                   style={styles.press}
//                   onPress={() => setZoomedItem(item)}
//                 >
//                   <Image source={item.image} style={styles.image} />
//                   <Text style={styles.nunitoSemiBold}>{item.label}</Text>
//                 </Pressable>
//               </View>
//             ))}
//           </View>
//         ))}
        
//         {zoomedItem && (
//           <Modal transparent={true} animationType="fade">
//             <Pressable onPress={() => setZoomedItem(null)} style={styles.overlay}>
//               <QuizFrame item={zoomedItem} />
//             </Pressable>
//           </Modal>
//         )} 
//       </View>  

//         <View
//           style={styles.row}
//         >
//           <Pressable
//               onPress={() => {
//                 console.log("Play audio");
//               }}
//           >
//             <Image
//                 source={require("../assets/images/Audio.png")}
//                 style = {{
//                   width: 45, 
//                   height: 45, 
//                   marginLeft: 280,
//                   marginBottom: 35
//                 }}
//             />

//          </Pressable>
//         </View>
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
//   image: {
//     width: 104,
//     height: 104,
//   },
//    row: {
//     flexDirection: 'row', 
//     justifyContent: 'center', 
//     marginBottom: 30  
//   },
//   card: {
//     width: 152,
//     height: 200,
//     backgroundColor: "white",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     marginHorizontal: 15
//   },
//     nunitoLight: {
//     fontFamily: "Nunito-Light",
//     color: "#555",
//     fontSize: 20
//   },
//   nunitoSemiBold: {
//     fontFamily: "Nunito-SemiBold",
//     color: "#555",
//     fontSize: 25,
//     fontWeight: "600",
//   },
//   press: {
//     width: 152,
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 999,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// })

// export { Q2 };