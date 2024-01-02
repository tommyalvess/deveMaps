import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/Main';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}