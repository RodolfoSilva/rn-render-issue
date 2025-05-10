import { StyleSheet, Text, View } from "react-native";

import List from "@/components/List";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Regular!</Text>
        <Link href={`/nested/${Date.now()}`}>
          <Text style={styles.link}>Go to nested</Text>
        </Link>
      </View>
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
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
