import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home'
import UserForm from './src/pages/UserForm/index'
import MoonPhase from './src/pages/MoonPhase'
import Settings from './src/pages/Settings'
import About from './src/pages/About'

import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const icons = {
  Home:{
    name: 'home',
  },
  MoonPhase:{
    name: 'moon',
  },
  Settings:{
    name: 'settings',
  },
  About:{
    name: 'code',
  }
}

function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={
        ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name]
            return <Icon name={name} color={color} size={size} />
          },
          headerShown: false
        })
      }
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveBackgroundColor: 'lightgray',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name='MoonPhase' component={MoonPhase} />
      <Tab.Screen name='Settings' component={Settings} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="UserForm" component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}