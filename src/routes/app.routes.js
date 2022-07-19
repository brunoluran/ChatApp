import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatRoom from '../screens/ChatRoom';
import Register from '../screens/Register';
import Messages from '../screens/Messages';
import Search from '../screens/Search';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName='ChatRoom'>
      <AppStack.Screen name='ChatRoom' component={ChatRoom} options={{ headerShown: false }} />
      <AppStack.Screen name='Register' component={Register} options={{ title: '' }} />
      <AppStack.Screen
        name='Messages'
        component={Messages}
        options={({ route }) => ({
          title: route.params.thread.name,
        })}
      />
      <AppStack.Screen name='Search' component={Search} />
    </AppStack.Navigator>
  );
}
