import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/navigation";

// import FeedScreen from "./src/screens/FeedScreen";
// import CreatePostScreen from "./src/screens/CreatePostScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgray",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
