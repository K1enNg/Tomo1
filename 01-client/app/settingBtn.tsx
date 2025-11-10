import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

function SettingBtn({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <Feather name="settings" color={"#000"} size={24} />
    </TouchableOpacity>
  );
}

export default SettingBtn;
