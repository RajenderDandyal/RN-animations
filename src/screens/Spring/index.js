import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Spring extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  handlePress = () => {
    /* The tension defines how much energy the spring has,
    and the friction defines how quickly that energy will dissipate.
    Based upon the spring formula the Animated.Value will bounce around like a spring until it stops.*/
    this.state.animation.addListener(({ value }) => {
      console.log(value);
    });
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,// less value for good spring effect
      tension: 250 // more value for good spring effect
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start();
    });
  }

  render() {
    const animatedStyle = {
      transform: [
        { scale: this.state.animation}
      ]
    };
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 50,
    height: 50,
    backgroundColor: "tomato",
  }
});