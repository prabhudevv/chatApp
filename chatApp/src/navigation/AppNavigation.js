import { createStackNavigator } from '@react-navigation/stack';

import Login from "../components/Login";
import Chat from "../components/Chat";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigation;