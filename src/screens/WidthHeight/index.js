import React, {Component} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from "react-native";

class WidthHeight extends Component {
  // scale is much performant use that more
  // widthHeight will change the dimensions of element
  state = {
    animation: new Animated.Value(150)// it is not necessary to set this in state, can be set any where
  };
  handleAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 250,// - will flip the box  while scaling and + will only scale
      duration: 650,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 150,
        duration: 600
      }).start()
    })
  };

  render() {
    let animationStyles = {
      width: this.state.animation,
      height: this.state.animation
    };
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handleAnimation}>
            <Animated.View style={[{justifyContent: "center", alignItems: "center"}, styles.box, animationStyles]}>
              <Text> WidthHeight </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

export default WidthHeight;
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "orange"
  }
});
