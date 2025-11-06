import { Text, View } from "react-native";
import SignUp from "./SignUp";
import Q1Title from "./Q1Title";
import Q1 from "./Q1";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Q1Title/>
      {/* <SignUp/> */}
    </View>
  );
}