import { StyleSheet } from 'react-native'

// 112, 130, 216

const styles = StyleSheet.create({
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'orange',
    marginBottom: 15,
  },
  campo: {
    width: 270,
    height: 40,
    margin: '10px auto',
    marginTop: 15,
    borderWidth: 2,
    fontSize: 15,
    padding: 10,
  },
  botao: {
    width: 300,
    height: 40,
    margin: '10px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    backgroundColor: '#b2bceb',
    borderColor: '#7082d8'
  },
  txtBotao: {
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 3,
  },
  resultadoContainer: {
    display: 'inline',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: 400,
    color: 'green',
  },
  resultado: {
    textDecorationLine: 'underline'
  }
})

export {styles}