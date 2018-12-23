/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import NavigationBar from "./NavigationBar";
type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    NavigationBar.setColor("#1976d2");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          React Native Component : Navigation Bar : Color Change {"\n"}
          {"\n"}
          Package and Module can be seen in android folder package named
          nativegame{"\n"}
          {"\n"}
          Two files one for moodule and other one package where we register the
          Module
          {"\n"}
          {"\n"}
          Passing package back to NavigationBar.js file and export it so that it
          can be used in any other package{"\n"}
          {"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
  },
  textContainer: {
    fontFamily: "Roboto",
    padding: 20,
    textAlign: "left",
    fontSize: 20,
    color: "#fafafa"
  }
});
