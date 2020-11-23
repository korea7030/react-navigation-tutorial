import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Feed() {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
}


function Notifications() {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}