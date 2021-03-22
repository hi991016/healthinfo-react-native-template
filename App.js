/**
 * Health Info
 * https://github.com/hi991016/HEALTHINFO
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import DrawerMenu from './src/component/DrawerMenu';
import Statistics from './src/screens/StatisticScreen';
import Notification from './src/drawer/NotificationScreen';
import Setting from './src/drawer/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LaddingScreen from './src/screens/LaddingScreen';
import LoginSplash from './src/screens/LoginSplash';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import FriendsList from './src/drawer/FriendListScreen';
import Search from './src/drawer/SearchScreen';
import Running from './src/screens/RunScreen';
import Loader from './src/component/Loader';
import EndActivityScreen from './src/screens/EndActivityScreen';
import StartCompetition from './src/screens/StartCompetition';
import StopCompetition from './src/screens/StopCompetition';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerHome() {
  return (
    <>
        <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={AppNavigation} />
            <Drawer.Screen name="Diary" component={Statistics} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="FriendsList" component={FriendsList} />
            <Drawer.Screen name="Search" component={Search} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Running" component={Running} />
            <Drawer.Screen name="EndActivity" component={EndActivityScreen} />
            {/* I can't hide the bottom tab RunScreen so I chose this option. hehe */}
            <Drawer.Screen name="StartCompetition" component={StartCompetition} />
            <Drawer.Screen name="StopCompetition" component={StopCompetition} />
        </Drawer.Navigator>
    </>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
              <Stack.Screen name='SplashScreen' component={SplashScreen} />
              <Stack.Screen name='DrawerHome' component={DrawerHome} />
              <Stack.Screen name='LaddingScreen' component={LaddingScreen} />
              <Stack.Screen name='LoginSplash' component={LoginSplash} />
              <Stack.Screen name='LoginScreen' component={LoginScreen} />
              <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
              <Stack.Screen name='Loader' component={Loader} />
              <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
