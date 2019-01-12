import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, PanResponder, Dimensions } from "react-native";

export default class Extrapolate extends Component {
  state = {
    animation: new Animated.ValueXY(0),
    value: 0,
  };

  componentWillMount() {

    this.state.animation.y.addListener(({ value }) => {
      this.setState({
        value
      })
    });

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.animation.x, dy: this.state.animation.y },
      ]),
    });
  }

  render() {
    const { height } = Dimensions.get("window");

    var scaleAndFlipOnReverse = this.state.animation.y.interpolate({
      inputRange: [0, height / 3],
      outputRange: [0.1, 1],
      // extrapolate:"extend",
      // extrapolate:"clamp",
      extrapolateLeft: "extend",
      extrapolateRight: "clamp",
    });

    const animatedStyle = {
      transform: [
        { scale: scaleAndFlipOnReverse },
      ]
    };
    return (
        <View style={styles.container} {...this._panResponder.panHandlers}>
          <Animated.View
              style={[styles.box, animatedStyle]}
          >
            <Text>{Math.round(this.state.value)}/{Math.round(height/3)}</Text>
          </Animated.View>
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
    width: 75,
    height: 75,
    backgroundColor: "tomato",
  },
});