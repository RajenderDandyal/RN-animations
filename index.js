import { Navigation } from "react-native-navigation";
import { screenNames, componentIds } from "./src/screens";
import Opacity from "./src/screens/Opacity";
import RootScreen from "./src/screens/RootScreen";
import Translate from "./src/screens/Translate";
import Scale from "./src/screens/Scale";
import WidthHeight from "./src/screens/WidthHeight";
import Absolute from "./src/screens/Absolute";
import Interpolation from "./src/screens/Interpolation";
import Rotate from "./src/screens/Rotate";
import EasingAnimation from "./src/screens/Easing";
import Spring from "./src/screens/Spring";
import Loop from "./src/screens/Loop";
import Events from "./src/screens/Events";
import DragAndThrowUsingDecay from "./src/screens/Drag&throwUsingDecay";

Navigation.registerComponent(screenNames.rootScreen, () => RootScreen);
Navigation.registerComponent(screenNames.opacity, () => Opacity);
Navigation.registerComponent(screenNames.translate, () => Translate);
Navigation.registerComponent(screenNames.scale, () => Scale);
Navigation.registerComponent(screenNames.widthHeight, () => WidthHeight);
Navigation.registerComponent(screenNames.absolute, () => Absolute);
Navigation.registerComponent(screenNames.interpolation, () => Interpolation);
Navigation.registerComponent(screenNames.rotate, () => Rotate);
Navigation.registerComponent(screenNames.easing, () => EasingAnimation);
Navigation.registerComponent(screenNames.spring, () => Spring);
Navigation.registerComponent(screenNames.loop, () => Loop);
Navigation.registerComponent(screenNames.events, () => Events);
Navigation.registerComponent(screenNames.dragAndThrowUsingDecay, () => DragAndThrowUsingDecay);

const stack = {
  children: [
    {
      component: {
        id: componentIds.animationStack,
        name: screenNames.rootScreen,
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
