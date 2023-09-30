import { Image } from 'react-native'
import { styles } from './style'

function Frame(props) {
  return(
    <Image source={props.src} style={styles.ag}/>
  )
}

export { Frame }