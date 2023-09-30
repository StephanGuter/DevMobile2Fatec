import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { styles } from './styles'

function App(){
  const [imc, setImc] = useState(0)
  const [classificacao, setClassificacao] = useState('Classificação')
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  return(
    <View>
      <Text style={styles.titulo}>Cálculo de IMC</Text>

      <View style={styles.blkImc}>
        <Text style={styles.imc}>{imc}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={setAltura}
      />

      <Pressable style={styles.btnVerificar} onPress={
        () => {
          setImc((peso / (altura * altura)).toFixed(1))

          if (imc > 39.9) {
            setClassificacao('Obesidade Grau III ou Mórbida')
          } else if (imc > 35) {
            setClassificacao('Obesidade Grau II')
          } else if (imc > 30) {
            setClassificacao('Obesidade Grau I')
          } else if (imc > 25) {
            setClassificacao('Sobrepeso')
          } else if (imc > 18.5) {
            setClassificacao('Peso Normal')
          } else {
            setClassificacao('Abaixo do Peso')
          }
        }
      }><Text style={styles.txtBtnVerificar}>Verificar</Text></Pressable>

      <View style={styles.blkClassificacao}>
        <Text style={styles.lblClassificacao}>{classificacao}</Text>
      </View>
    </View>
  )
}

export default App