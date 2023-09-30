import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';

import { styles } from './styles.js'
import { Frame } from './src/Frame/index'

function App() {

  const res = {
     coringa: { nome: 'Resultado', img: require('./assets/G-A.png')},
     gasolina: { nome: 'Gasolina', img: require('./assets/G.png')},
     alcool: { nome: 'Álcool', img: require('./assets/A.png')}, 
  }

  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [resultado, setResultado] = useState(res.coringa)

  function verificar() {

    if (gasolina == 0) {
        setResultado(res.gasolina)
    } else {
      if ((alcool / gasolina) < 0.7) {
        setResultado(res.alcool)
      } else {
        setResultado(res.gasolina)
      }
    }
  }

  return (
    <View>
      <Text style={styles.lblTitulo}>Álcool ou Gasolina</Text>

      <Frame src={resultado.img}/>

      <TextInput style={styles.txtInput} placeholder='Preço do Álcool' onChangeText={setAlcool}/>

      <TextInput style={styles.txtInput} placeholder='Preço da Gasolina' onChangeText={setGasolina}/>

      <Pressable style={styles.btnVerificar} onPress={verificar}><Text style={styles.txtbtnVerificar} selectable={false}>Verificar</Text></Pressable>
      
      <View style={styles.blkResultado}>
        <Text style={styles.lblResultado}>{resultado.nome}</Text>
      </View>
    </View>
  )
}

export default App