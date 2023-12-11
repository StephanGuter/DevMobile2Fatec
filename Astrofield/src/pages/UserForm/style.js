import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  lblTitulo: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
  },
  ctn: {
    marginLeft: 20,
    marginTop: 12,
    justifyContent: 'center',
    display: 'inline',
  },
  lbl: {
    fontSize: 12,
  },
  txtInput: {
    marginLeft: 10,
    height: 30,
    borderBottomWidth: 1,
    fontSize: 12,
    padding: 10,
  },
  txtInputNome: {
    width: 210,
  },
  txtInputIdade: {
    width: 50,
  },
  pkr: {
    marginLeft: 10,
    fontSize: 12,
  },
  sdr: {
    fontSize: 12,
    width: 290,
  },
  txtValor: {
    fontSize: 12,
  },
  btnConfirmar: {
    width: 290,
    height: 35,
    margin: '15px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#84D2FF',
  },
  txtBtnConfirmar: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 3,
  },
})

export { styles }