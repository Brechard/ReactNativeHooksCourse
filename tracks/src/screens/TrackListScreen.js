import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button title="Got to TrackDetailsScreen" onPress={() => navigation.navigate('TrackDetails')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
