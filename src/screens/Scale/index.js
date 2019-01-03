import React, {Component} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from "react-native";

class Scale extends Component {
  state = {
    animation: new Animated.Value(1)// it is not necessary to set this in state, can be set any where
  };
  handleAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -2,// - will flip the box  while scaling and + will only scale
      duration: 650,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 600
      }).start()
    })
  };

  render() {
    let animationStyles = {
      transform: [
        {
          scaleX: this.state.animation // scale scaleY scaleX
        }
      ]
    };
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handleAnimation}>
            <Animated.View style={[{justifyContent: "center", alignItems: "center"}, styles.box, animationStyles]}>
              <Text> Scale </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

export default Scale;
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
  },

});
