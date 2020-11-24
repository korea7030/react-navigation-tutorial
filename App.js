import * as React from 'react';
import { View } from 'react-native';
import {  NavigationContainer,
          useFocusEffect,
          useIsFocused
        } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/*
screen이 포커스 됐을때의 event
1. 'focus' event listener add
2. useFocusEffect hook
3. useIsFocused hook
*/

function ProfileScreen({ navigation }) {
  // focus 됐으면 true, 아니면 false
  const isFocused = useIsFocused();

  useFocusEffect(
    React.useCallback(() => {
      // when focused
      alert('Screen was focused');

      // when unfocused
      return () => {
        alert('Screen was unfocused');
      };
    }, [])
  );

  // React.useEffect(() => {
  //   // focus event listener
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     alert('Screen is focused');
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
    </View>
  );
}

function HomeScreen() {
  return <View />;
}

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
