// import { PAGE_1 } from "@/constants/bodyParts";
// import { View } from "react-native";
// import BodyParts from "./bodyParts";
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from "./navigations/AppNavigator";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* <Flow3 {...PAGE_3} /> */}
//       {/* <BodyParts {...PAGE_1} /> */}
//       {/* <Information {...PAGE_3} /> */}
//        <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
      
//     </View>
//   );
// }

import { Redirect } from "expo-router";

export default function Index() {
  // immediately go to Information1Screen on launch
  return <Redirect href="/information/Information1Screen" />;
}
