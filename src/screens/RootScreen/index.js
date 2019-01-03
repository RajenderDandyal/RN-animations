import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {componentIds, screenNames} from "../index";
import NavigateUser from "../../utils/navigationFunction";

class RootScreen extends Component {
  state = {
    btn: [
      {text: screenNames.opacity, key: 0},
      {text: screenNames.translate, key: 1},
      {text: screenNames.scale, key: 2},
      {text: screenNames.widthHeight, key: 3},
      {text: screenNames.absolute, key: 4},
      {text: screenNames.interpolation, key: 5},
      {text: screenNames.rotate, key: 6},
    ]
  };

  handlePress = (indexPosition) => {
    let pressedBtn = this.state.btn.filter(item => item.key === indexPosition)
    NavigateUser(componentIds.animationStack, pressedBtn[0].text)
  }

  render() {
    return (
        <View style={styles.container}>
          {this.state.btn.map((item, i) => {
            return (<TouchableOpacity key={i} onPress={() => this.handlePress(i)}>
              <View style={styles.btn}>
                <Text>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>)
          })}
        </View>
    );
  }
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    margin:5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd"
  }
});