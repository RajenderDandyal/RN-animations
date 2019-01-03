import {Navigation} from "react-native-navigation";
import {screenNames, componentIds} from "../../screens";


// to switch bottom tabs only first argument is required
// ex
//NavigateUser(2)


// to push screen ..first 3 arguments are required ... rest are optional
//ex to passProps
// let passProps = {
//       productId
//     }
// NavigateUser(2, componentIds.myAccountStack, screenNames.addProduct, passProps)

// ex to pass options with/without passProps
//let passProps = {
//       productId
//     }
// let options: {
//       topBar: {
//         title: {
//           text: 'Pushed screen title'
//         }
//       }
//     }
//  NavigateUser(2, componentIds.myAccountStack, screenNames.addProduct, passProps/null, options)

let NavigateUser = ( stackId, screenName, passProps, options) => {

  if (stackId && screenName && passProps && options) {
    Navigation.push(stackId, {
      component: {
        name: screenName,
        passProps: {
          ...passProps
        },
        options: {
          ...options
        }
      }
    });
  } else if (!options) {
    if (stackId && screenName && passProps) {
      Navigation.push(stackId, {
        component: {
          name: screenName,
          passProps: {
            ...passProps
          }
        }
      })
    } else if (!passProps) {
      if (stackId && screenName) {
        Navigation.push(stackId, {
          component: {
            name: screenName,
          }
        })
      }
    }
  } else if (!passProps) {
    if (!options) {
      if (stackId && screenName) {
        Navigation.push(stackId, {
          component: {
            name: screenName,
          }
        })
      }
    } else {
      Navigation.push(stackId, {
        component: {
          name: screenName,
          options: {
            ...options
          }
        }
      })
    }
  }
};


export default NavigateUser