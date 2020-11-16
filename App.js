import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// stack 형태로 screen 쌓는 Navigator 생성
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 시작 시 어떤 Screnn을 처음으로 나타낼지를 initialRouteName에 표시해야 함 */}
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;