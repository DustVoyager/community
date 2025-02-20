import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      />
      <Button title="버튼이름" onPress={() => console.log("pressed")} />
      <Pressable onPress={() => console.log("he?")}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  text: {
    color: "red",
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});
