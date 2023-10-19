import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  titleLine: {
    alignSelf: "center",
    color: "red",
    fontSize: 20,
    fontWeight: '500',
  },
  ctn: {
    marginLeft: 20,
    marginTop: 12,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  lbl: {
    marginRight: 5,
    fontSize: 16,
    width: 40,
    textAlign: 'right'
  },
  field: {
    border: '2px solid black',
    paddingLeft: 2,
    width: 225,
    fontSize: 16,
  },
    btnConvert: {
    width: 290,
    height: 35,
    margin: '15px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#84D2FF',
  },
  txtBtnConvert: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 3,
  },
  converted: {
    marginTop: 8,
    alignSelf: "center",
    color: "green",
    fontSize: 18,
  },
});

export { styles }