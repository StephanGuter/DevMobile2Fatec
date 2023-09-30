import { View, ScrollView, Text, TextInput, Switch, Pressable } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { Dados } from './src/Dados/index'
import { styles } from './styles'

function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [sexo, setSexo] = useState(1)
  const [escolaridade, setEscolaridade] = useState(5)
  const [limite, setLimite] = useState(2000)
  const [naturalidade, setNaturalidade] = useState(true)
  const [mostrarDados, setMostrarDados] = useState(false);

  const escolaridades = [
    { id: 1, nome: "Infantil" },
    { id: 2, nome: "Fundamental incompleto" },
    { id: 3, nome: "Fundamental completo" },
    { id: 4, nome: "Médio incompleto" },
    { id: 5, nome: "Médio completo" },
    { id: 6, nome: "Superior incompleto" },
    { id: 7, nome: "Superior completo" },
    { id: 8, nome: "Mestre" },
    { id: 9, nome: "Doutor" },
  ]

  const itensEscolaridade = escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
  })

  function confirmar() {
    setMostrarDados(true)
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        { /* FORMULARIO */ }
        <Text style={styles.lblTitulo}>Abertura de Conta</Text>

        { /* NOME */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Nome:</Text>
          <TextInput style={[styles.txtInput, styles.txtInputNome]} onChangeText={setNome}/>
        </View>

        { /* IDADE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Idade:</Text>
          <TextInput style={[styles.txtInput, styles.txtInputIdade]} onChangeText={setIdade}/>
        </View>

        { /* SEXO */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Sexo:</Text>
          <Picker style={styles.pkr} selectedValue={sexo} onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
            <Picker.Item key={1} value={1} label="Masculino"/>
            <Picker.Item key={2} value={2} label="Feminino"/>
          </Picker>
        </View>

        { /* ESCOLARIDADE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Escolaridade:</Text>
          <Picker style={styles.pkr} selectedValue={escolaridade} onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}>
            {itensEscolaridade}
          </Picker>
        </View>

        { /* LIMITE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Limite:</Text>
          <Slider style={styles.sdr} minimumValue={100} maximumValue={10000} onValueChange={(valorSelecionado) => setLimite(valorSelecionado)} value={limite}/>
          <Text style={styles.txtValor}>{limite.toFixed(0)}</Text>
        </View>

        { /* NATURALIDADE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Brasileiro:</Text>
          <Switch value={naturalidade} onValueChange={(valorSwitch) => setNaturalidade(valorSwitch)}/>
        </View>

        { /* ----- ----- ----- ----- ----- */ }

        <Pressable style={styles.btnConfirmar} onPress={confirmar}><Text style={styles.txtBtnConfirmar} selectable={false}>Confirmar</Text></Pressable>

        { /* ----- ----- ----- ----- ----- */ }

        {mostrarDados && <Dados nome={nome} idade={idade} sexo={sexo} escolaridades={escolaridades} escolaridade={escolaridade} limite={limite} naturalidade={naturalidade}/>}
        
      </ScrollView>
    </View>
  );
}

export default App