import React, {Component} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from "react-native";

class Absolute extends Component {
  state = {
    animation: new Animated.Value(0)// it is not necessary to set this in state, can be set any where
  };
  handleAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 250,
      duration: 650,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 600
      }).start()
    })
  };

  render() {
    let animationStyles = {
      left: this.state.animation,
      top: this.state.animation,
      //right, bottom
    };
    return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableWithoutFeedback onPress={this.handleAnimation}>
              <Animated.View style={[{justifyContent: "center", alignItems: "center"}, styles.box, animationStyles]}>
                <Text> Absolute </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
    );
  }
}

export default Absolute;
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 150,
    height: 150,
    backgroundColor: "orange"
  },
  wrapper: {
    margin: 150,
    width: 300,
    height: 300,
    backgroundColor: "#eee"
  }
});
