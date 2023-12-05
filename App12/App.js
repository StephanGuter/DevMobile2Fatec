import Pessoal from './src/pages/Pessoal/index'
import Formacao from './src/pages/Formacao/index'
import Experiencia from './src/pages/Experiencia/index'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

export default function App(){
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Formacao} />
        <Tab.Screen name='Experiência' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}