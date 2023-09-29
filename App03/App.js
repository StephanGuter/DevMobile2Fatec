import { useState } from 'react'
import { SafeAreaView, View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './styles.js'

export default function App() {
  const [fator1, setFator1] = useState(0)
  const [fator2, setFator2] = useState(0)
  const [produto, setProduto] = useState(0)

  function calcular() {
    setProduto(fator1 * fator2)
  }

  return (
    <View>
      <Text style={styles.titulo}>Múltiplicador de Números</Text>

      <TextInput style={styles.campo} placeholder='Digite o primeiro nº' onChangeText={setFator1}/>

      <TextInput style={styles.campo} placeholder='Digite o segundo nº' onChangeText={setFator2}/>

      <Pressable style={styles.botao} onPress={calcular}><Text style={styles.txtBotao} selectable={false}>Calcular</Text></Pressable>

      <View  style={styles.resultadoContainer} >
        <Text style={styles.texto}>Resultado: </Text>
        <Text style={[styles.texto, styles.resultado]}>{produto}</Text>
      </View>
    </View>
  );
}