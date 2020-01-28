import { Animated, Easing } from 'react-native'

import Home from './screens/Home'
import Projects from './screens/Projects'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Projects: {
    screen: Projects
  }
}, {
  initialRouteName: "Home",
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
});
export default createAppContainer(AppNavigator);