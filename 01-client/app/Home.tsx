import { SafeAreaView } from "react-native-safe-area-context";

const lessons = [
  {
    id: "1",
    title: "lesson 1",
    data: ["data1", "data2", "data3"],
  },
  {
    id: "2",
    title: "lesson 2",
    data: ["data1", "data2", "data3"],
  },
  {
    id: "3",
    title: "lesson 3",
    data: ["data1", "data2", "data3"],
  },
];

const radius = 200;
const angleStep = Math.PI / 8;

function Home() {
  return (
    <SafeAreaView>
      {/* <View
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 1,
        }}
      >
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  position: "relative",
                  width: 300,
                  backgroundColor: "#ccc",
                  marginBlock: 16,
                  height: 500,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 99999,
                    padding: 16,
                    paddingBlock: 32,
                    marginInlineEnd: "auto",
                  }}
                >
                  <Text style={{ textAlign: "left" }}>{item.title}</Text>
                </View>
                {item.data.map((d, i) => {
                  const angle = index * angleStep - Math.PI / 2;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  return (
                    <View
                      key={d + i}
                      style={{
                        position: "absolute",
                        left: 100 + 50 * i,
                        top: 50 * i,
                      }}
                    >
                      <Text>{d}</Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View> */}
    </SafeAreaView>
  );
}

export default Home;
