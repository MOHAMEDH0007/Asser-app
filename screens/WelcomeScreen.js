import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Newsletter")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    marginTop: 0,
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    marginTop: 150,
    width: 120,
    height: 300,
  },
  title: {
    marginTop: 20,
    marginVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    height: 40,
    width: 360,
    marginTop: 180,
    backgroundColor: "green",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 4,
  },
});

export default WelcomeScreen;
