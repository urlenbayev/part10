import { StyleSheet, Text, View, Image } from "react-native";
import StatItem from "./StatItem";
import theme from "../theme";

export default function RepositoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsRow}>
        <StatItem count={item.stargazersCount} label="Stars" />
        <StatItem count={item.forksCount} label="Forks" />
        <StatItem count={item.reviewCount} label="Reviews" />
        <StatItem count={item.ratingAverage} label="Rating" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topRow: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  fullName: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontFamily: theme.fonts.main,
    color: "#586069",
    marginBottom: 5,
  },
  languageTag: {
    backgroundColor: "#0366d6",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  languageText: {
    fontFamily: theme.fonts.main,
    color: "white",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});
