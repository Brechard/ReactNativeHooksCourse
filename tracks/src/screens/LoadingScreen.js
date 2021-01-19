import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, Image, StyleSheet } from "react-native";

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default LoadingScreen;
