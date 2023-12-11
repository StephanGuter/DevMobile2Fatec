import { View, Text, Image, Pressable } from 'react-native'
import { Frame, Title, TextL1, TextL3, FormButtom } from '../../components/Form/index'
import { storage } from '../../services/storage'

export default function About() {
  const img = 'https://br.gravatar.com/userimage/238904983/b2f4f14d3d763c065b8aab59fd8ba7ee.jpeg?size=256';
  const nome = 'Stephan Güter F. Cunha';
  const ra = '0050831911033'

  return (
    <View>
      <Title text={"Desenvolvedor"}/>
      <Frame src={img} w={300} h={300}/>
      <TextL1 text={"Dados pessoais"}/>
      <TextL3 text={nome}/>
      <TextL3 text={"RA: " + ra}/>
      <FormButtom callsFor={storage.clearData} text={"Limpar Dados do APP"}/>
    </View>
  )
}