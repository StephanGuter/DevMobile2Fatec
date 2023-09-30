import { View, Text } from 'react-native'
import { styles } from './style'

function Dados(props) {
  return (
    <View>
      { /* EXIBIÇÃO */ }
      <Text style={styles.lblInformacoes}>Dados informados:</Text>

      { /* NOME */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Nome:</Text>
        <Text style={styles.dt}>{props.nome}</Text>
      </View>

      { /* IDADE */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Idade:</Text>
        <Text style={styles.dt}>{props.idade}</Text>
      </View>

      { /* SEXO */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Sexo:</Text>
        <Text style={styles.dt}>{(props.sexo == 1) ? 'Masculino' : 'Feminino'}</Text>
      </View>

      { /* ESCOLARIDADE */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Escolaridade:</Text>
        <Text style={styles.dt}>{props.escolaridades[props.escolaridade-1].nome}</Text>
      </View>

      { /* LIMITE */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Limite:</Text>
        <Text style={styles.dt}>{props.limite.toFixed(0)}</Text>
      </View>

      { /* NATURALIDADE */ }
      <View style={styles.ctn}>
        <Text style={styles.lbl}>Naturalidade brasileira:</Text>
        <Text style={styles.dt}>{(props.naturalidade) ? 'Sim' : 'Não'}</Text>
      </View>
    </View>
  )
}

export { Dados }