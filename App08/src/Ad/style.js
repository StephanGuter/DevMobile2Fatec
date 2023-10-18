import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { 
    width: 280, 
    height: 'auto',
    alignSelf: 'center',
    margin: 5,
    padding: 20,
    border: '1px solid lightGrey',
    borderRadius: 10,
  },
  img: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: 'grey',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    color: 'grey'
  },
  finalPrice: {
    fontSize: 25,
    color: 'orange',
    fontWeight: 'bold',
  },
  btnBuy: {
    width: 240,
    height: 40,
    margin: '10px auto',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  txtBtnBuy: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
    color: 'white',
  },
})

export { styles }