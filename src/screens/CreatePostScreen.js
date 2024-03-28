import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};
const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  function onSubmit() {
    console.log(description);
    setDescription("");
    setImage("");
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <View>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="What's on your mind ?"
        multiline
      />
      <Image source={{ uri: image }} style={styles.image} />
      </View>
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
  buttonContainer: {
    marginTop: "auto",
  },
  input: {
    fontWeight: "light",
    padding: 5,
    height: 400,
    borderWidth: 0,
    borderColor: "gray",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 13,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "700",
  },
  image: {
    width: "50%",
    aspectRatio: 4/3,
    alignSelf:"center",
    position:"absolute",
    // zIndex:1,
    top:200,
    left:'auto',
  },
  icon: {
    marginLeft: "auto",
  },
});
export default CreatePostScreen;
