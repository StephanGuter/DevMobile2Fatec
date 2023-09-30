import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  titulo: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  blkImc: {
    width: 100,
    height: 100,
    borderWidth: 2,
    margin: '20px auto',
    textAlign: 'center',
    justifyContent: 'center',
  },
  imc: {
    fontSize: 40,
    marginBottom: 8,
  },
  input: {
    alignSelf: 'center',
    height: 45,
    width: 270,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  btnVerificar: {
    width: 260,
    height: 40,
    margin: '10px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#aFa',
  },
  txtBtnVerificar: {
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 3,
  },
  blkClassificacao: {
    alignSelf: 'center',
    width: 220,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  lblClassificacao: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    fontWeight: 400,
    color: 'red',
  }, 
})

export {styles}