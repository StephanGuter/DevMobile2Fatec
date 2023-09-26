import { useState } from 'react'
import { View, Text, Pressable} from 'react-native'
import { styles } from './styles'


function App(){
  const [count, setCount] = useState(0)

  function incrementar() { 
    setCount(count + 1) 
  }
  
  function decrementar() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>
      
      <View style={styles.quadrado}>
        <Text style={styles.contador}>{count}</Text>
      </View>
      
      <Pressable style={[styles.botao, styles.botaoInc]} onPress={incrementar}><Text style={[styles.txtBotao, styles.txtBotaoInc]} selectable={false}>+</Text></Pressable>
      
      <Pressable style={[styles.botao, styles.botaoDec]} onPress={decrementar}><Text style={[styles.txtBotao, styles.txtBotaoDec]} selectable={false}>–</Text></Pressable>
    </View>
  )
}

export default App