import { PAGE_2 } from "@/constants/flow3";
import { View } from "react-native";
import Flow3 from "./flow3";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flow3 {...PAGE_2} />
      {/* <Information {...PAGE_3} /> */}
    </View>
  );
}
