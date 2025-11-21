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

import { Redirect, useRouter} from "expo-router";
import { ROUTES } from "../constants/naviagtion";

export default function Index() {
  const router = useRouter();
  // Redirect to Flow 1
  // return <Redirect href= {ROUTES.INFORMATION1} />;

  // Ridirect to Sitemap for testing
  // return <Redirect href="/_sitemap" />;

  //Redirect to Entry Test Q1 For testing Data Collection Logic
  return <Redirect href={ROUTES.ENTRY_TEST1}/>
}
