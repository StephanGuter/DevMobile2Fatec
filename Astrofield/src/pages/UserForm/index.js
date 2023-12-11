import { View, ScrollView, Text, TextInput, Switch, Pressable } from 'react-native'
import { Frame, Title, TextL1, TextL3, LabeledInput, FormButtom } from '../../components/Form/index'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { styles } from './style'
import { storage } from '../../services/storage'
import { uniqueID } from '../../services/uniqueID'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react'

export default function UserForm({route}) {
  const user = route.params?.user
  const setUser = route.params.setUser
  
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [buttomText, setButtomText] = useState('')
  
  const [customDefinition, setCustomDefinition] = useState(false)

  const [id, setId] = useState()
  const [name, setName] = useState()
  const [city, setCity] = useState()
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)

  const [coordinateCity, setCoordinateCity] = useState(0)

  const navigation = useNavigation()

  const coordinates = [
    { id: 0, name: "Definir(!)", lat: 0, lon: 0 },
    { id: 1, name: "Santos", lat: -23.950189286731035, lon: -46.32914495801291 },
    { id: 2, name: "Guarujá", lat: -23.974623502451262, lon: -46.24534654975529 },
    { id: 3, name: "Praia Grande", lat: -24.02769060541102, lon: -46.50958609469285 },
    { id: 4, name: "São Paulo", lat: -23.580154655957703, lon: -46.672255277140366 },
    { id: 5, name: "Toronto", lat: 43.731024506644864, lon: -79.37120252438412 },
    { id: 6, name: "Tokyo", lat: 35.708419019957034, lon: 139.76961663934776 },
    { id: 7, name: "Sydney", lat: -33.83069532473606, lon: 151.01158015343754 },
    { id: 8, name: "Cairo", lat: 30.05977917709718, lon: 31.24730555405317 },
  ]

  const coordinateCities = coordinates.map( (value, key) => {
    return <Picker.Item key={key} value={value.id} label={value.name} />
  })

  function confirm() {
    let currentUser = {id, name, city, latitude, longitude, darkTheme}
    let users
    
    storage.getUsers().then((value) => {
      users = value
      if (route.params?.newUser) {
        users.push(currentUser)
      }
      else
        users.splice(users.findIndex((value) => value.id === currentUser.id), 1, currentUser)

      setUser(currentUser)

      storage.setUsers(users).then(() => {
        storage.setLastUser(currentUser).then(() => {
          alert('Salvo com sucesso!');
          navigation.goBack()
        })
      })
    })
  }

  useEffect(() => {
    if (route.params?.newUser)
    {
      setTitle("Bem vindo ao Astrofield")
      setMessage("Primeiro, insira seus dados:")
      setButtomText("Criar usuário")

      setId(uniqueID())
    } else {
      setTitle("Alterar usuário")
      setMessage("Seus dados:")
      setButtomText("Confirmar alteração")

      setId(user.id)
      setName(user.name)
      setCity(user.city)
      setLatitude(user.latitude)
      setLongitude(user.longitude)
      setDarkTheme(user.darkTheme)
    }
  }, [])

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title text={title}/>        
        <TextL3 text={message}/>

        { /* NAME */ }
        <LabeledInput label={"Nome"} valueChange={setName}/>

        { /* CITY */ }
        <LabeledInput label={"Cidade"} value={city} valueChange={(changedValue) => {
          if (!customDefinition) {
            setCity(changedValue)
            setCoordinateCity(0)
            setLatitude(0)
            setLongitude(0)
          }}}
        />

        { /* PICK CITY */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Ou escolha a cidade:</Text>
          <Picker style={styles.pkr} selectedValue={coordinateCity} onValueChange={(value, key) => {
            setCoordinateCity(value)
            if (value > 0) {
              setCustomDefinition(true)
              setLatitude(coordinates[key].lat)
              setLongitude(coordinates[key].lon)
              setCity(coordinates[key].name)
            } else {
              setCustomDefinition(false)
              setLatitude(0)
              setLongitude(0)
              setCity('Definir(!)')
            }
          }}>
            {coordinateCities}
          </Picker>
        </View>

        { /* LATITUDE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Latitude:</Text>
          <TextInput style={[styles.txtInput, styles.txtInputNome]} onChangeText={setLatitude} value={latitude}/>
        </View>
        <View style={styles.ctn}>
          <Slider
            disabled={customDefinition}
            style={styles.sdr}
            minimumValue={-90.0}
            maximumValue={90.0}
            onValueChange={setLatitude}
            value={latitude}/
          >
        </View>

        { /* LONGITUDE */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Longitude:</Text>
          <TextInput style={[styles.txtInput, styles.txtInputNome]} onChangeText={setLongitude} value={longitude}/>
        </View>
        <View style={styles.ctn}>
          <Slider
            disabled={customDefinition}
            style={styles.sdr} 
            minimumValue={-180.0} 
            maximumValue={180.0} 
            onValueChange={setLongitude}
            value={longitude}/
          >
        </View>

        { /* THEME */ }
        <View style={styles.ctn}>
          <Text style={styles.lbl}>Tema Escuro:</Text>
          <Switch value={darkTheme} onValueChange={setDarkTheme}/>
        </View>

        { /* BUTTOM */ }
        <FormButtom text={buttomText} callsFor={confirm}/>
      </ScrollView>
    </View>
  )
}