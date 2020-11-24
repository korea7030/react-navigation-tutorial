import * as React from 'react';
import { View } from 'react-native';
import {  useNavigation, NavigationContainer
        } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/*
useNavigation : navigation object의 access를 가능하게 함
*/
function GoToButton({ screenName }) {
  // navigation object
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <GoToButton screenName="Details" />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <GoToButton screenName="Home" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
