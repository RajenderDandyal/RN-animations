import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Loop extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.loop(Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    })).start();
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const animatedStyles = {
      transform: [
        { rotate: rotateInterpolate }
      ]
    };
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]} />
          </TouchableWithoutFeedback>
        </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});
