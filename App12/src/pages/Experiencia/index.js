import { View, Text } from 'react-native'
import { styles } from './style'

export default function Experiencia () {
  const experiencia = 'Analista de Suporte, Procfit Gestão Orientada a Processos LTDA';
  
  const projetos = [
    {
      Title: 'Hello World',
      Source: 'https://github.com/StephanGuter/hello-world'
    },
    {
      Title: 'EFCore WebAPI',
      Source: 'https://github.com/StephanGuter/EFCore.WebAPI'
    },
  ];

  return (
    <View>
      <Text style={styles.title}>
        Experiência Profissional
      </Text>

      <Text style={styles.txt}>
        {experiencia}
      </Text>

      <Text style={styles.title}>
        Projetos
      </Text>

      <Text style={styles.anchor} onPress={() => Linking.openURL(projetos[0].Source)}>
        - {projetos[0].Title}
      </Text>

      <Text style={styles.anchor} onPress={() => Linking.openURL(projetos[1].Source)}>
        - {projetos[1].Title}
      </Text>
    </View>
  )
}