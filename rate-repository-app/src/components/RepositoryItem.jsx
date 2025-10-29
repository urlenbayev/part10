import { StyleSheet, Text, View } from "react-native";

export default function RepositoryItem({ item }) {
  return (
    <View>
      <Text>Full name: {item.fullname}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
    </View>
  );
}
