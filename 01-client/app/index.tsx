import { PAGE_1 } from "@/constants/bodyParts";
import { View } from "react-native";
import BodyParts from "./bodyParts";

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
      {/* <Flow3 {...PAGE_3} /> */}
      <BodyParts {...PAGE_1} />
      {/* <Information {...PAGE_3} /> */}
    </View>
  );
}
