import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-home-outline" size={32} style={styles.icon} />
      <Text style={styles.home}>Home!</Text>
      <Text>Welcome!</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  home: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },

  icon: {
    color: "cornflowerblue",
  },
});
