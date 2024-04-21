import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function index() {
  return (
    <GestureHandlerRootView>
      <Redirect href="/authenticate/Login" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
