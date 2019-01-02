import { Navigation } from "react-native-navigation";
import { screenNames, componentIds } from "./src/screens";
import Opacity from "./src/screens/Opacity";

Navigation.registerComponent(screenNames.opacity, () => Opacity);

const stack = {
  children: [
    {
      component: {
        id: componentIds.animationStack,
        name: screenNames.opacity,
        passProps: {}
      }
    }
  ],
  options: {}
};
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: stack
    }
  });
});
