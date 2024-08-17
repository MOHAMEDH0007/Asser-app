import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");
  const [subscribeState, setSubscribeState] = React.useState(false);

  const Subscribe = (mail) => {
    setEmail(mail);
    setSubscribeState(validateEmail(mail));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.message}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        placeHolder="Type your email"
        value={email}
        onChangeText={Subscribe}
        keyboardType="email-address"
      />
      <Pressable
        disabled={!subscribeState}
        style={[
          styles.button,
          { backgroundColor: subscribeState ? "green" : "grey" },
        ]}
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    marginTop: 0,
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    marginTop: 20,
    width: 120,
    height: 120,
  },
  message: {
    marginVertical: 40,
    color: "#333333",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    alignSelf: "center",
    height: 40,
    width: 360,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    alignSelf: "center",
    height: 40,
    width: 360,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 4,
  },
});
