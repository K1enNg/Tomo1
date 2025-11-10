import Button from "@/app/button";
import CloseBtn from "@/app/closeBtn";
import ProgressBar from "@/app/progressBar";
import SettingBtn from "@/app/settingBtn";
import { View } from "react-native";

function Flow3SubComps() {
  return (
    <View>
      <Button>Tiếp tục</Button>
      <CloseBtn />
      <SettingBtn />
      <ProgressBar progress={0.5} />
    </View>
  );
}

export default Flow3SubComps;
