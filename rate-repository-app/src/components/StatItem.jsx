import { StyleSheet, Text, View } from "react-native";

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return String(count);
};

export default function StatItem({ count, label }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statCount}>{formatCount(count)}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  statLabel: {
    color: "#586069",
  },
});
