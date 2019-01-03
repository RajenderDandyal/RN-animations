import React, {Component} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from "react-native";

class Translate extends Component {
  state = {
    animation: new Animated.Value(0)// it is not necessary to set this in state, can be set any where
    // o is original location of element... which gets animated to toValue
  };
  handleAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 150,// +150 means element will go down of original position
      duration: 650,
    }).start(() => {
      //this.state.animation.setValue(0)
      Animated.timing(this.state.animation, {
        toValue: -150,// 0 to get back to original position// -150 means element will go up 150 of original position not the new animated position
        duration: 600
      }).start()
    })
  };

  render() {
    let animationStyles = {
      transform: [
        {
          translateY: this.state.animation,
        },
        {
          translateX: this.state.animation,
        }
      ]
    };
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handleAnimation}>
            <Animated.View style={[{justifyContent: "center", alignItems: "center"}, styles.box, animationStyles]}>
              <Text> Translate </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

export default Translate;
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
