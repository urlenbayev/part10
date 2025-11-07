import { StyleSheet, Text, View, Pressable } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tabText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function AppBar() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.tabText}>Repositories</Text>
      </Pressable>
    </View>
  );
}
