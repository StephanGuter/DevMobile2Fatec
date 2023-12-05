import { View, Text, Image } from 'react-native'
import { styles } from './style'

export default function Pessoal () {
  const img = 'https://br.gravatar.com/userimage/238904983/b2f4f14d3d763c065b8aab59fd8ba7ee.jpeg?size=256';
  const nome = 'Stephan Güter F. Cunha';
  
  return (
    <View>
      <Image
        source={{ uri: img }}
        style={styles.img}
      />

      <Text style={styles.title}>
        Dados pessoais
      </Text>

      <Text style={styles.txt}>
        {nome}
      </Text>
    </View>
  )
}