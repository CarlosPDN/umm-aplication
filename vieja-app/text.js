import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import StatusBarAye from "../components/StatusbarAye";
import React from "react";

export default function index() {
  return (
    <View>
      <StatusBarAye />
    </View>
  );
}
