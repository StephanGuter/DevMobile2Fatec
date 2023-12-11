import { View, Text, Image } from 'react-native'
import { Frame, Title, TextL1, TextL3, FormButtom } from '../../components/Form/index'
import { styles } from './style'
import { useState, useEffect } from 'react'
import astronomyAPI from '../../services/astronomyAPI'

export default function MoonPhase() {
  const [moonData, setMoonData] = useState([])

  const generateMoonPhase = async () => {
    const body = JSON.stringify({
      "format": "png",
      "observer": {
          "date": "2023-12-08",
          "latitude": -23.973,
          "longitude": -46.312
      },
      "style": {
          "backgroundColor": "red",
          "backgroundStyle": "stars",
          "headingColor": "white",
          "moonStyle": "sketch",
          "textColor": "red"
      },
      "view": {
          "type": "portrait-simple"
      }
    })

    const response = await astronomyApi.post(
      'api/v2/studio/moon-phase',
      body, 
      { headers: { 
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'ba1b025cb2mshb4e16e769ee5d10p1cdb0djsna847a0b05f2b',
        'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
      }}
    )

    setMoonData(response.data)
  }

  useEffect(async () => {
    await generateMoonPhase()
    setLoading(false)
  }, [])

  return (
    <View>
      <Text>{JSON.stringify(moonData, null, 2)}</Text>
    </View>
  )
}