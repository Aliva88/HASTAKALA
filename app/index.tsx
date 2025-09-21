
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./category";
import LanguageScreen from "./language";
import LoginScreen from "./login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ✅ Splash Screen
function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Language"); // automatically go to LanguageScreen
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hastakala</Text>
      <Text style={styles.subtitle}>Crafting dreams collecting culture</Text>
      <StatusBar barStyle="dark-content"/>
    </View>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#9486acff", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 35, fontWeight: "bold", color: "#222" },
  subtitle: { fontSize: 20, color: "#555", marginTop: 8 },
});


