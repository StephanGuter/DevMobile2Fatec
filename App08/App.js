import { View, Text, ScrollView } from 'react-native';
import { Ad } from './src/Ad/index'
import { styles } from './style'

function App(){
  const adDataSource = [
    { 
      id: 1,
      imgSrc: require('./assets/rtx.jpg'),
      description: 'Placa de Video RTX 3060 Gaming OC Gigabyte GeForce, 12 GB',
      price: 3104.43,
      rebate: 0.26,
      freeShipping: false
    },
    { 
      id: 2,
      imgSrc: require('./assets/ps5.jpg'),
      description: 'Console Sony PlayStation 5, SSD 825GB',
      price: 3719.9,
      rebate: 0.1,
      freeShipping: true
    },
    { 
      id: 3,
      imgSrc: require('./assets/JBL.jpg'),
      description: 'Caixa de Som JBL Boombox 3, Bluetooth, USB, 80W RMS, Preto',
      price: 2199.99,
      rebate: 0,
      freeShipping: true
    },
  ]

  const ads = adDataSource.map((value, key) => {
    return <Ad 
      key={key}
      value={value.id}
      label={value.nome}
      imgSrc={value.imgSrc}
      description={value.description}
      price={value.price}
      rebate={value.rebate}
      freeShipping={value.freeShipping}
    />
  })

  return(
    <View>
      <Text style={styles.title}>Anuncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ads}
      </ScrollView>
    </View>
  )
}

export default App;