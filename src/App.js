import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import React from "react";

import theme from "./theme";

export default function App() {
  const [loaded] = useFonts({
    OutfitBlack: require("./assets/fonts/Outfit-Black.ttf"),
    OutfitRegular: require("./assets/fonts/Outfit-Regular.ttf"),
    RubikBeastlyRegular: require("./assets/fonts/RubikBeastly-Regular.ttf"),
  });

  const onPressProposeButton = () => console.log("Propose-moi un film, stp !");

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Un film</Text>
      <Text style={styles.subtitle}>
        Pas envie de réfléchir, laisse toi{" "}
        <Text style={styles.highlight}>guider</Text> !
      </Text>
      <View style={styles.shadow}>
        <TouchableOpacity onPress={onPressProposeButton} style={styles.button}>
          <Text style={styles.textButton}>Me proposer un film</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  title: {
    fontFamily: "RubikBeastlyRegular",
    fontSize: 32,
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontFamily: "OutfitRegular",
    fontSize: theme.typography.fontSize,
    color: theme.palette.primary.light,
  },
  highlight: {
    fontFamily: "OutfitBlack",
  },
  button: {
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing,
    marginVertical: theme.spacing * 2,
    backgroundColor: theme.palette.background,
  },
  textButton: {
    fontFamily: "OutfitBlack",
    fontSize: 32,
    color: theme.palette.primary.main,
  },
});
