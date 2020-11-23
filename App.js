import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {  SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';  // 화면 짤리는 부분 방지

function Demo() {
  const insets = useSafeAreaInsets();

  return (
    // 위에 짤리는 부분 개선
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'}}
    >
      <Text>This is top Text</Text>
      <Text>This is bottom Text</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // 위에 짤리는 부분 개선
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="nome">
          <Stack.Screen name="Home">
            {() => {
              <Tab.Navigator
                initialRouteName="Analitics"
                tabBar={() => null}
              >
                <Tab.Screen name="Analitics" component={Demo} />
                <Tab.Screen name="Profile" component={Demo} />
              </Tab.Navigator>
            }}
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Demo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}