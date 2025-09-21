import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LanguageScreen() {
  const languages = [
    "English",
    "Hindi",
    "Odia",
    "Bangla",
    "Marathi",
    "Gujarati",
    "Hariyanvi",
    "Bhojpuri",
  ];

  const handlePress = (lang: string) => {
    Alert.alert("Language Selected", `You chose: ${lang}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Language</Text>
      <View style={styles.grid}>
        {languages.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(lang)}
          >
            <Text style={styles.buttonText}>{lang}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b38b4d",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2d1b0f",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e6b3b3",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 10,
    minWidth: 120,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
