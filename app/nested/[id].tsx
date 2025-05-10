import { StyleSheet, Text, View } from "react-native";

import List from "@/components/List";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Nested Page!</Text>
        <Link href={`/regular/${Date.now()}`}>
          <Text style={styles.link}>Go to regular</Text>
        </Link>
      </View>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    height: 128,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  link: {
    textDecorationLine: "underline",
    color: "orange",
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
  },
});
