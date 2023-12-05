import { View, Text } from 'react-native'
import { styles } from './style'

export default function Formacao () {
  const formacao = 'Tecnologia em Sistemas para Internet';
  
  return (
    <View>
      <Text style={styles.title}>
        Formação Acadêmica
      </Text>

      <Text style={styles.txt}>
        {formacao}
      </Text>
    </View>
  )
}