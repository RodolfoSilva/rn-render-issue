import { StyleSheet, Text, View } from "react-native";

export default function Item({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 63,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
