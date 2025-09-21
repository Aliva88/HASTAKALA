import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Category</Text>
      <Text style={styles.subtitle}>(Your categories will be shown here)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5d6ba", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#000", marginBottom: 10 },
  subtitle: { fontSize: 18, color: "#333" },
});
