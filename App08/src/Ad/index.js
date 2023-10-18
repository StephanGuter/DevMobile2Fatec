import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './style'

function Ad(props) {
  const finalPrice = props.price - (props.price * props.rebate)
  let price = ''
  let freeShipping = ''

  if (props.rebate != 0) {
    price = 'R$ ' + props.price
  }

  if (props.freeShipping) {
   freeShipping = 'Frete Gratis!'
  }

  return(
    <View elevation={5} style={styles.container}>
      <Image style={styles.img} source={props.imgSrc}/>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.finalPrice}>R$ {finalPrice.toFixed(2)}</Text>
      <Text>{freeShipping}</Text>
      <Pressable style={styles.btnBuy}>
        <Text style={styles.txtBtnBuy} selectable={false}>Comprar</Text>
      </Pressable>
    </View>
  )
}

export { Ad }