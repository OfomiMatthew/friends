import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, Button } from "react-native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};
const CreatePostScreen = () => {
  const [description, setDescription] = useState("");

  function onSubmit() {
   console.log(description)
   setDescription('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="What's on your mind ?"
        multiline
      />
      <View style={styles.buttonContainer}>
      <Button title="Post" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    padding: 10,

    backgroundColor: "#fff",
  },
  buttonContainer:{
marginTop:"auto"
  },
  input: {
    fontWeight: "500",
    height:500,
    borderColor:"gray",
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 13,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "700",
  },
});
export default CreatePostScreen;
