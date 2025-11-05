import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const title = "Đăng ký";
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inlineLabel}>Mật khẩu</Text>
        <TextInput
          style={styles.input} // space for label
          placeholder="Nhập mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm password input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inlineLabel}>Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry={!showConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirm(!showConfirm)}
        >
          <Ionicons
            name={showConfirm ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.spacer} />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Implement this function")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // vertical center
    alignItems: "center", // horizontal center
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  inputContainer: {
    width: "90%",
    marginBottom: 20,
    position: "relative",
  },
  inlineLabel: {
    position: "absolute",
    left: 10,
    top: 6,
    fontSize: 12,
    color: "#c6c4c4ff",
    backgroundColor: "white",
    paddingHorizontal: 4,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingTop: 19,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 20,
  },
  spacer: {
    height: 80,
  },

  button: {
    backgroundColor: "#FFD700",
    width: "90%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default SignUp;
