import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "./progressBar";
import SettingBtn from "./settingBtn";

function ProgressGroup({ progress }: { progress: number }) {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          gap: 16,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 12,
        }}
      >
        <SettingBtn />
        <ProgressBar progress={progress} style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}

export default ProgressGroup;
