import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  lblTitulo: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  txtInput: {
    width: 270,
    height: 40,
    margin: '10px auto',
    marginTop: 15,
    borderWidth: 2,
    fontSize: 15,
    padding: 10,
  },
  btnVerificar: {
    width: 285,
    height: 40,
    margin: '10px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#aFa',
  },
  txtbtnVerificar: {
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 3,
  },
  blkResultado: {
    alignSelf: 'center',
    width: 220,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  lblResultado: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    fontWeight: 400,
    color: 'red',
  }
})

export { styles }