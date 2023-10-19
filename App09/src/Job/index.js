import { View, Text } from 'react-native'
import { styles } from './style'

function Job(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.jobTitle}>{props.jobTitle}</Text>
      <Text style={styles.label}>Salário: <Text style={[styles.value, styles.salaryValue]}>R$ {props.salary.toFixed(2)}</Text></Text>
      <Text style={styles.label}>Descrição: <Text style={styles.value}>{props.jobDescription}</Text></Text>
      <Text style={styles.label}>Contato: <Text style={styles.value}>{props.contactEmail}</Text></Text>
    </View>
  )
}

export { Job }