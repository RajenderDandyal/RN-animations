import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Opacity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Opacity </Text>
      </View>
    );
  }
}

export default Opacity;
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
