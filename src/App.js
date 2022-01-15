import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    OutfitBlack: require("./assets/fonts/Outfit-Black.ttf"),
    OutfitRegular: require("./assets/fonts/Outfit-Regular.ttf"),
    RubikBeastlyRegular: require("./assets/fonts/RubikBeastly-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Un film</Text>
      <Text style={styles.subtitle}>
        Open up <Text style={styles.file}>App.js</Text> to start working on your
        app!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontFamily: "RubikBeastlyRegular",
    fontSize: 32,
    color: "#F5F652",
  },
  subtitle: {
    fontFamily: "OutfitRegular",
    fontSize: 24,
    color: "#F5F652",
  },
  file: {
    fontFamily: "OutfitBlack",
  },
});
