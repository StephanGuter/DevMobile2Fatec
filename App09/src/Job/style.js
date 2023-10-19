import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { 
    width: 300, 
    height: 'auto',
    alignSelf: 'center',
    margin: 5,
    padding: 20,
    border: '1px solid lightGrey',
    borderRadius: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
    color: 'grey',
  },
  salaryValue: {
    fontSize: 16,
    fontWeight: 500,
  },
  value: {
    color: 'black',
  },
})

export { styles }