import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

// tab이나 drawer를 쓸 경우, 화면이 바꼈을때의 포커스 여부를 통해 화면을 표시 가능
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function Screen1({ navigation }) {
  return (
    <SafeAreaView style={[styles.ccontainer, { backgroundColor: '#6a51ae'}]}>
      <FocusAwareStatusBar  barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
        color='#fff'
      />
    </SafeAreaView>
  );
}

function Screen2({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1'}]}>
      <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  )
}

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator headerMode="none">
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center' },
});