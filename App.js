import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import {
  Splash,
  Welcome
} from './screens';

const Stack = createStackNavigator()

function App() {

  const [loaded] = useFonts({
    "Pacifico-Regular": require('./assets/fonts/Pacifico-Regular.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Splash'}
      >

        <Stack.Screen
          name="Splash"
          component={Splash}
        />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

