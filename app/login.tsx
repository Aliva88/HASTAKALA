import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Category")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#8fcbbc", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#fff" },
  button: { backgroundColor: "#fff", padding: 12, borderRadius: 8 },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#000" },
});
