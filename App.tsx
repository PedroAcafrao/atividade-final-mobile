import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from './src/pages/Login'
import ListPage from './src/pages/List'
import RegisterPage from './src/pages/Register'


function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name='Registro' component={RegisterPage} options={{ title: 'Registrar-se' }} />
      <Stack.Screen name='Lista' component={ListPage} options={{ title: 'Lista' }} />
    </Stack.Navigator>
  )
}

function ListStack() {
  return (
    <ListPage />
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // TESTE
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name='Registro' component={RegisterPage} options={{ title: 'Registrar-se' }} />
          <Stack.Screen name='Lista' component={ListPage} options={{ title: 'Lista' }} />
        </Stack.Navigator>

      </NavigationContainer>





  )
}


{/*
const Stack = createNativeStackNavigator()

function MapStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name='Registro' component={RegisterPage} options={{ title: 'Registrar-se' }} />
            <Stack.Screen name='Lista' component={ListPage} options={{ title: 'Lista' }} />
        </Stack.Navigator>
    )
}

function ListStack() {
    return (
        <ListPage />
    )
}

{/*
const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName: 'map' | 'list'
                        
                        if (route.name === 'MapTab') iconName = 'map'
                        else iconName = 'list'

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen
                    name='MapTab' component={MapStack}
                    options={{ title: 'Mapa', headerShown: false }}
                />
                <Tab.Screen
                    name='ListTab' component={ListStack}
                    options={{ title: 'Lista', headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}







{/*


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */}
