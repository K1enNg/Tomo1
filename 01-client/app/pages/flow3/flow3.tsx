import Button from "@/app/components/button";
import CloseBtn from "@/app/components/closeBtn";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Flow3() {
  const title = "Bài 01";
  const lesson = "Bộ phận cơ thể";
  const descript = "Hôm nay mình sẽ học về các bộ phận trên cơ thể nhé!";
  const button = "Tiếp tục";

  const testBtn = () => alert("pressed");

  return (
    <SafeAreaView style={styles.container}>
      <CloseBtn onPress={testBtn} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.lesson}>{lesson}</Text>
      </View>
      <Text style={styles.descript}>{descript}</Text>
      <Button style={styles.button} onPress={testBtn}>
        {button}
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    textAlign: "center",
  },
  lesson: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
  },
  descript: {
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: "100%",
    marginBottom: 32,
    maxWidth: 600,
    marginInline: "auto",
  },
});

export default Flow3;
