import React from "react";
import { DrawerNavigator } from "react-navigation";

import MapsScreen from "../screens/MapsScreen";
import Calendar from "../screens/CalendarScreen";

const DrawerExample = DrawerNavigator(
  {
    MapsScreen: { screen: MapsScreen},
    Calendar: { screen: Calendar}
  },
  {
    initialRouteName: "MapsScreen",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

// export default class DrawerExample extends Component {
//   render() {
//     closeDrawer = () => {
//
//     }
//   }
// }
