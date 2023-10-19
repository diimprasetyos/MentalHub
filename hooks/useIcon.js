import { Platform } from "react-native";

export const useIcon = {
  getNavigationIcon: (routeName, focused) => {
    let icon;
    switch (routeName) {
      case "Home":
        icon = focused ? "home" : "home-outline";
        break;
      case "Explore":
        icon = focused ? "compass" : "compass-outline";
        break;
      case "Profile":
        icon = focused ? "person" : "person-outline";
        break;
      case "Appointments":
        icon = focused ? "calendar" : "calendar-outline";
      default:
        break;
    }
    return icon;
  },
};
