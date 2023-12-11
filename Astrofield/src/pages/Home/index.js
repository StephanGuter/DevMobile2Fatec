import { View } from 'react-native'
import { Frame, Title, TextL1, TextL3, FormButtom } from '../../components/Form/index'
import { storage } from '../../services/storage'
import moment from 'moment' 
import { useState, useEffect } from 'react'
import epicAPI from '../../services/epicAPI'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [earthPictureName, setEarthPictureName] = useState('')
  const [earthPictureDate, setEarthPictureDate] = useState('')
  
  function goToUserForm() {
    navigation.navigate('UserForm', {user, setUser, newUser: true})
  }

  const yesterday = {
    day: moment().utc().subtract(1, 'days').format('DD'),
    month: moment().utc().subtract(1, 'days').format('MM'),
    year: moment().utc().subtract(1, 'days').format('YYYY')
  }

  const getPicturesOfTheDay = async (today) => {
    const response = await epicAPI.get(today);
    setEarthPictureName(response.data[response.data.length - 1].image)
    setEarthPictureDate(response.data[response.data.length - 1].date)
  }

  // useEffect(() => {
  //     console.log("HOME users state changed: " + JSON.stringify(users)) 
  // }, [users])

  // useEffect(() => {
  //     console.log("HOME user state changed: " + JSON.stringify(user))
  // }, [user])

  useEffect(() => {
    // USER
    storage.getUsers().then((storedUsers) => {
      if (storedUsers.length === 0)
        goToUserForm()
      else {
        setUsers(storedUsers)
        storage.getLastUser().then((storedUser) => {
          setUser(storedUser)
        })
      }
    })

    // PICTURE
    getPicturesOfTheDay(yesterday.year + "-" + yesterday.month + "-" + yesterday.day)
  }, [])

  return (
    <View>
      <Title text={"Astrofield"}/>
      <TextL3 text={"Bem vindo, " + user.name + "!"}/>
      <TextL3 text={"Este é o Astrofield, seu app de astronomia. Aqui você encontra informações sobre tudo o que ocorre na galáxia."}/>
      <TextL3 text={"Comece vendo esta foto do nosso querido lar, tirada hoje:"}/>
      <Frame src={"https://epic.gsfc.nasa.gov/archive/natural/" + yesterday.year + "/" + yesterday.month + "/" + yesterday.day + "/png/" + earthPictureName + ".png"} w={300} h={300} caption={earthPictureDate}/>
    </View>
  )
}