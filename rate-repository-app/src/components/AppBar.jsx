import { StyleSheet, Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tab: {
    marginLeft: 16,
  },
  tabText: {
    fontFamily: theme.fonts.main,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
}
