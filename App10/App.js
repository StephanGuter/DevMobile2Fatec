import { useState } from 'react'
import { View, Text, Pressable, TextInput, Picker } from 'react-native'
import { styles } from './style'

export default function App() {
  const exchange = [
    { "id": 0, "currency": "Dólar", "code":"USD", "symbol":"$", "dollarValue": 1 },
    { "id": 1, "currency": "Real", "code":"BRL", "symbol":"R$", "dollarValue": 0.19845 }, //19-10-2023
    { "id": 2, "currency": "Euro", "code":"EUR", "symbol":"€", "dollarValue": 1.05766 }, //19-10-2023
  ]

  const currencyItems = exchange.map( (value, key) => {
    return <Picker.Item key={key} value={value.id} label={value.currency + ' (' + value.code + ')'} />
  } )

  const [value, setValue] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState(1)
  const [currencyTo, setCurrencyTo] = useState(0)
  const [convertedValue, setConvertedValue] = useState('____________')

  function convert() {
    const dolar = value * exchange[currencyFrom].dollarValue
    setConvertedValue(exchange[currencyTo].symbol + (dolar * (1 / exchange[currencyTo].dollarValue)).toFixed(2)  + ' (' + exchange[currencyTo].code + ')')
  }

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleLine}>Conversor de Moedas</Text>
        <Text style={styles.titleLine}>Dólar, Real e Euro</Text>
      </View>

      <View style={styles.ctn}>
        <Text style={styles.lbl}>Valor:</Text>
        <TextInput style={styles.field} onChangeText={setValue}/>
      </View>

      <View style={styles.ctn}>
        <Text style={styles.lbl}>De:</Text>
        <Picker style={styles.field} selectedValue={currencyFrom} onValueChange={(itemValue, itemIndex) => setCurrencyFrom(itemValue)}>
          {currencyItems}
        </Picker>
      </View>

      <View style={styles.ctn}>
        <Text style={styles.lbl}>Para:</Text>
        <Picker style={styles.field} selectedValue={currencyTo} onValueChange={(itemValue, itemIndex) => setCurrencyTo(itemValue)}>
          {currencyItems}
        </Picker>
      </View>

      <Pressable style={styles.btnConvert} onPress={convert}><Text style={styles.txtBtnConvert} selectable={false}>Converter</Text></Pressable>

      <Text style={styles.converted}>Resultado</Text>
      <Text style={styles.converted}>{convertedValue}</Text>
    </View>
  );
}
