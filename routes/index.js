// In App.js in a new project

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Appointments from "../screens/Appointments";
import { Ionicons } from "@expo/vector-icons";
import { useIcon } from "../hooks/useIcon";
import Explore from "../screens/Explore";
import CourseDetail from "../screens/CourseDetail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { getNavigationIcon } = useIcon;
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Anasayfa" component={Home} />
      <Stack.Screen name="CourseDetails" component={CourseDetail} />
    </Stack.Navigator>
  );
}

function AppointmentsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Randevular" component={Appointments} />
    </Stack.Navigator>
  );
}
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Keşfet" component={Explore} />
    </Stack.Navigator>
  );
}
function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = getNavigationIcon(route.name, focused);

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="Appointments" component={AppointmentsStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/**
 * TODO : Add Auth Stack and it's statements.
 */
export default AppStack;
