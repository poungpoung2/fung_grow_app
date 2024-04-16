import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import useWindowDimensions from './utils/useWindowDimensions';

import Discover1Screen from './screens/Discover1Screen';
import Discover2Screen from './screens/Discover2Screen';
import Discover3Screen from './screens/Discover3Screen';
import Discover4Screen from './screens/Discover4Screen';
import Discover5Screen from './screens/Discover5Screen';
import Discover6Screen from './screens/Discover6Screen';
import FarmScreen from './screens/FarmScreen';
import HelloScreen from './screens/HelloScreen';
import HomeScreen from './screens/HomeScreen';
import MushroomSelectionScreen from './screens/MushroomSelectionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        })}
      >
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          options={({ navigation }) => ({
            title: 'Hello',
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
          })}
        />
        <Stack.Screen
          name="Discover1Screen"
          component={Discover1Screen}
          options={({ navigation }) => ({
            title: 'Discover 1',
          })}
        />
        <Stack.Screen
          name="Discover2Screen"
          component={Discover2Screen}
          options={({ navigation }) => ({
            title: 'Discover 2',
          })}
        />
        <Stack.Screen
          name="Discover4Screen"
          component={Discover4Screen}
          options={({ navigation }) => ({
            title: 'Discover 4',
          })}
        />
        <Stack.Screen
          name="Discover5Screen"
          component={Discover5Screen}
          options={({ navigation }) => ({
            title: 'Discover 5',
          })}
        />
        <Stack.Screen
          name="Discover6Screen"
          component={Discover6Screen}
          options={({ navigation }) => ({
            title: 'Discover 6',
          })}
        />
        <Stack.Screen
          name="Discover3Screen"
          component={Discover3Screen}
          options={({ navigation }) => ({
            title: 'Discover 3',
          })}
        />
        <Stack.Screen
          name="FarmScreen"
          component={FarmScreen}
          options={({ navigation }) => ({
            title: 'Farm',
          })}
        />
        <Stack.Screen
          name="MushroomSelectionScreen"
          component={MushroomSelectionScreen}
          options={({ navigation }) => ({
            title: 'Mushroom_selection',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
