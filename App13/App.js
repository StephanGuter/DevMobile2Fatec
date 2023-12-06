import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'

import Pessoal from './src/pages/Pessoal'
import Formacao from './src/pages/Formacao'
import Experiencia from './src/pages/Experiencia'

export default function App(){
  const Tab = createBottomTabNavigator()

  const icons = {
    Pessoal:{
      name: 'person',
    },
    Formacao:{
      name: 'school',
    },
    Experiencia:{
      name: 'medal',
    }
  }

  return (
    <NavigationContainer>
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
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}