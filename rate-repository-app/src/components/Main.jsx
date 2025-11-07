import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
}
