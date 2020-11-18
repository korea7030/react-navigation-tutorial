import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Update the title"
       // update option use setOptions
        onPress={() => navigation.setOptions({title: 'Updated!'})} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Custom profile header' })}/>
    </View>
  )
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // 여러 스크린에 스타일 적용할 때 사용
        screenOntions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            // 해당 screen 에서만 적용됨. screen이 넘어가면 원래 style로 돌아감
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // header title custom component
            // (headerTitle: 스택 탐색기에 특정된 속성이며 제목을 표시하는 텍스트 구성 요소로 기본 설정되어 있기 때문에 headerTitle에 설정해야 함)
            headerTitle: props => <LogoTitle {...props} />
          }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;