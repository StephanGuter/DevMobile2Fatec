import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'orange',
  },
  quadrado: {
    width: 100,
    height: 100,
    borderWidth: 2,
    margin: '20px auto',
    textAlign: 'center',
    justifyContent: 'center',
  },
  contador: {
    fontSize: 70,
    color: 'red',
  },
  botao: {
    width: 200,
    height: 50,
    margin: '10px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 4,
  },
  botaoInc: {
    backgroundColor: '#ADA',
    borderColor: '#0B0'
  },
  botaoDec: {
    backgroundColor: '#DAA',
    borderColor: '#B00'
  },
  txtBotao: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  txtBotaoInc: {
    color: '#0B0',
  },
  txtBotaoDec: {
    color: '#B00',
  }
})

export {styles}