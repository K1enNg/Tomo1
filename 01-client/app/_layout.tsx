import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#2bf5fb" }, 
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2bf5fb",
  },
});
