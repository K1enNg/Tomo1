import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";

function SettingBtn({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <Image source={require("@/assets/images/flow3s/settingIcon.png")} />
    </TouchableOpacity>
  );
}

export default SettingBtn;
