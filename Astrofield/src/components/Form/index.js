import { View, Text, Image, TextInput, Pressable } from 'react-native'
import { styles } from './style'

export function Frame(props) {
  return(
    <View style={styles.imgCtn}>
      <Image source={props.src} style={[{width:props.w, height:props.h}, styles.img]}/>
      <Text style={styles.caption}>{props.caption}</Text>
    </View>
  )
}

export function Title(props) {
  return(
    <Text style={styles.title}>{props.text}</Text>
  )
}

export function TextL1(props) {
  return(
    <Text style={styles.txtL1}>{props.text}</Text>
  )
}

export function TextL3(props) {
  return(
    <Text style={styles.txtL3}>{props.text}</Text>
  )
}

export function LabeledInput(props) {
  return(
    <View style={styles.ctn}>
      <Text style={styles.label}>{props.label + ":"}</Text>
      <TextInput style={styles.labeledInput} onChangeText={props.valueChange} value={props.value}/>
    </View>
  )
}

export function FormButtom(props) {
  return(
    <Pressable onPress={props.callsFor} style={styles.buttom}><Text style={styles.buttomText} selectable={false}>{props.text}</Text></Pressable>
  )
}
