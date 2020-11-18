import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// navigation props : stack navigator에 있는 모든 screen component를 전달
function HomeScreen({ navigation }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // post data가 server로 전송된 경우 수행
    }
  }, [route.params?.post])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        // move details
        // 해당 스크린으로 이동하라는 의미. 이미 이동되어 있으면 중첩이동 처리됨(push의 의미)
        onPress={() => navigation.navigate('Details', {
          // navigate에 route와 함께 params 전달
          itemId: 86,
          otherParam: 'anything you want here',
        })}>
      </Button>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      >
        {/* post 화면에서 입력 후 Done 클릭 시, route.params가 업데이트되서 출력됨 */}
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </Button>
    </View>
  );
}

function createPostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // pass params back home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

function DetailsScreen({ navigation }) {
  // route 변수를 통해 param정보를 받음
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })
      }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      {/* stack navigator의 경우 기본적으로 back View으로 이동하도록 왼쪽 상단에 표시하지만, custom하게 버튼 표시 가능
        stack navigator에 하나의 View만 있을 경우는 왼쪽 상단에 버튼이 표시안됨 */}
      {/* Android의 경우 기기상의 back button을 누르면 goBack() 함수가 수행된다 */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      {/* 첫 screen으로 이동. push의 개념이 아님 */}
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

// stack 형태로 screen 쌓는 Navigator 생성
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 시작 시 어떤 Screnn을 처음으로 나타낼지를 initialRouteName에 표시해야 함 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* 해당 screnn으로 이동 시, params값을 지정 가능 */}
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }} initialParams={{ itemId: 42}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;