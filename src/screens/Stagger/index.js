import React, {Component} from "react";
import {StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from "react-native";

export default class Stagger extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  };
  handlePress = () => {
    Animated.stagger(200, [
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500
      }),
      Animated.spring(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300,// second is staggered/delayed by 200 ms
        friction:2,
        tension:160
      })
    ]).start(() => {
      Animated.stagger(200, [
        Animated.timing(this.state.colorAnimation, {
          toValue: 0,
          duration: 500,
        }),
        Animated.spring(this.state.scaleAnimation, {
          toValue: 1,
          duration: 300,// second is staggered/delayed by 200 ms
          friction:2,
          tension:160
        })
      ]).start()
    })
  }

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })
    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [
        {scale: this.state.scaleAnimation}
      ]
    }
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Animated.View style={[styles.box, boxStyle]}>
              <Text style={styles.text}>Hello Stagger</Text>
            </Animated.View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  }
});