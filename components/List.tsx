import { useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./Item";

export default function List() {
  const {
    data = [],
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["list"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return Array.from({ length: 100 }, (_, i) => ({
        id: `item-${i}`,
        name: `Item ${i}`,
        description: `Description for item ${i}`,
      }));
    },
  });

  const renderItem = useCallback(
    ({ item }: { item: (typeof data)[number] }) => {
      return <Item {...item} />;
    },
    []
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={() => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No items found</Text>
        </View>
      )}
      renderItem={renderItem}
      refreshing={isLoading || isRefetching}
      onRefresh={() => refetch()}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
