import React, {Component} from "react";
import {Text, View, StyleSheet, Animated, TouchableNativeFeedback} from "react-native";

class Opacity extends Component {
  state = {
    animation: new Animated.Value(1)
  };
  handleAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 550,
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:1,
        duration:500
      }).start()
    })
  };

  render() {
    let animationStyles = {
      opacity: this.state.animation
    }
    return (
        <View style={styles.container}>
          <TouchableNativeFeedback onPress={this.handleAnimation}>
            <Animated.View style={[{justifyContent: "center", alignItems: "center"}, styles.box, animationStyles]}>
              <Text> Opacity </Text>
            </Animated.View>
          </TouchableNativeFeedback>
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
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "orange"
  }
});
