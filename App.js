import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import {
  Splash,
  Welcome,
  LoginHome,
  SignUpHome,
  Login,
  FavoriteGenre,
  SignUpPhone,
  VerifyPhone,
  CreatePassword,
  AddInfo
} from './screens';
import { Tabs } from './navigation';
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

        <Stack.Screen
          name="LoginHome"
          component={LoginHome}
        />

        <Stack.Screen
          name="SignUpHome"
          component={SignUpHome}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="FavoriteGenre"
          component={FavoriteGenre}
        />

        <Stack.Screen
          name="SignUpPhone"
          component={SignUpPhone}
        />

        <Stack.Screen
          name="VerifyPhone"
          component={VerifyPhone}
        />

        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
        />

        <Stack.Screen
          name="AddInfo"
          component={AddInfo}
        />

        <Stack.Screen
          name='Home'
          component={Tabs}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

