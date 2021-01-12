import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Enter title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Text style={styles.title}>Enter content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Button
        title={"Save Blog Post"}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { title: "", content: "" },
};

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
});

export default BlogPostForm;
